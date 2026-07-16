import { Component, signal } from '@angular/core';
import { BaseUI } from './components/base-ui/base-ui';
import { Navbar } from "./components/navbar/navbar";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-root',
    imports: [BaseUI, Navbar, RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected readonly title = signal('frontend');
}
