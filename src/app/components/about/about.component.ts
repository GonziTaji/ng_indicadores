import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
    constructor(private modalService: NgbModal) {}

    openModal(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }
}
