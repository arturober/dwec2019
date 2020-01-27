import { Component, OnInit } from "@angular/core";
import { FilesystemDirectory, Plugins, FilesystemEncoding } from '@capacitor/core';
const { Filesystem } = Plugins;

@Component({
  selector: "app-filesystem",
  templateUrl: "./filesystem.page.html",
  styleUrls: ["./filesystem.page.scss"]
})
export class FilesystemPage implements OnInit {
  files: string[] = [];
  constructor() {}

  async ngOnInit() {
    await Filesystem.writeFile({
      path: 'secrets/text.txt',
      data: 'This is a test',
      directory: FilesystemDirectory.Documents,
      encoding: FilesystemEncoding.UTF8
    });

    try {
      const result = await Filesystem.readdir({
        path: 'secrets',
        directory: FilesystemDirectory.Documents,
      });
      this.files = result.files;
    } catch (e) {
      console.error('Unable to read dir', e);
    }
  }
}
