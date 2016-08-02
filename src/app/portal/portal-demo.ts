import { Component, ViewChildren, QueryList } from '@angular/core';
import { NgFor } from '@angular/common';
import { Portal, ComponentPortal } from '../../core/portal/portal';
import { TemplatePortalDirective, PortalHostDirective } from '../../core/portal/portal-directives';

@Component({
  moduleId: module.id,
  selector: 'portal-demo',
  templateUrl: './portal-demo.html',
  styleUrls: ['./portal-demo.scss'],
  directives: [TemplatePortalDirective, PortalHostDirective],
})
export class PortalDemo {
  @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<Portal<any>>;

  selectedPortal: Portal<any>;

  get programmingJoke() {
    return this.templatePortals.first;
  }

  get mathJoke() {
    return this.templatePortals.last;
  }

  get scienceJoke() {
    return new ComponentPortal(ScienceJoke);
  }
}

@Component({
  moduleId: module.id,
  selector: 'science-joke',
  template: `<p> 100 kilopascals go into a bar. </p>`,
})
class ScienceJoke {}