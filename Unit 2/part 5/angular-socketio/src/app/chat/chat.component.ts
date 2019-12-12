import { Component, OnInit, Input } from "@angular/core";
import { IMessage } from "../interfaces/imessage";
import { SocketIoService } from "../services/socket-io.service";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  @Input() user: string;
  messages: IMessage[] = [];
  newMsg = "";
  connected = false;

  constructor(private ioService: SocketIoService) {}

  ngOnInit() {
    this.ioService.connection$.subscribe(
      connected => (this.connected = connected)
    );
    this.ioService.messages$
      .pipe(filter(m => m.user !== this.user)) // Only messages not mine
      .subscribe(m => {
        m.mine = false;
        this.messages.push(m);
      });
  }

  connect() {
    this.ioService.connect(5000);
  }

  disconnect() {
    this.ioService.disconnect();
  }

  send() {
    const msg: IMessage = { user: this.user, text: this.newMsg };
    this.ioService.sendMessage(msg);
    msg.mine = true;
    this.messages.push(msg); // Add the message directly to the chat
    this.newMsg = "";
  }
}
