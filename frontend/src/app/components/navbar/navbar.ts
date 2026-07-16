import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
    selector: 'app-navbar',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './navbar.html',
    styleUrl: './navbar.scss',
})
export class Navbar {
    navbarItens = [
        {
            label: "Todas",
            path: "/"
        },
        {
            label: "Pendentes",
            path: "/pendentes"
        },
        {
            label: "Em andamento",
            path: "/em-andamento"
        },
        {
            label: "Concluídas",
            path: "/concluidas"
        }
    ];
}
