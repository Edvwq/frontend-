import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Administración',
                items: [
                    { label: 'Perfil', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/perfil'] }
                ]
            },
            {
                label: 'Inventario',
                items: [
                    { label: 'Categoría', icon: 'pi pi-fw pi-folder', routerLink: ['/admin/categoria'] }
                ]
            },
            {
                label: 'Roles',
                icon: 'pi pi-fw pi-users'
            },
            {
                label: 'Usuario',
                icon: 'pi pi-fw pi-user'
            }
        ];
    }
}
