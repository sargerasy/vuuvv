import { Component, ViewEncapsulation } from '@angular/core';

/*

<md-card> is a basic content container component that adds the styles of a material design card.

While you can use this component alone, it also provides a number of preset styles for common
card sections, including:
 - md-card-title
 - md-card-subtitle
 - md-card-content
 - md-card-actions
 - md-card-footer

 You can see some examples of cards here:
 http://embed.plnkr.co/s5O4YcyvbLhIApSrIhtj/

 TODO: update link to demo site when it exists

*/

@Component({
  selector: 'md-card',
  template: require('./card.html'),
  styles: [require('./card.scss')],
  encapsulation: ViewEncapsulation.None,
})
export class MdCard {}

/*
The following components don't have any behavior. They simply use content projection to wrap
user content for flex layout purposes in <md-card> (and thus allow a cleaner, boilerplate-free API)

<md-card-header> is a component intended to be used within the <md-card> component.
It adds styles for a preset header section (i.e. a title, subtitle, and avatar layout).

You can see an example of a card with header here:
http://embed.plnkr.co/tvJl19z3gZTQd6WmwkIa/

TODO: update link to demo site when it exists
*/

@Component({
  selector: 'md-card-header',
  template: require('./card-header.html'),
  encapsulation: ViewEncapsulation.None,
})
export class MdCardHeader {}

/*

<md-card-title-group> is a component intended to be used within the <md-card> component.
It adds styles for a preset layout that groups an image with a title section.

Youcan see an example of a card with a title-group section here:
http://embed.plnkr.co/EDfgCF9eKcXjini1WODm/

TODO: update link to demo site when it exists
*/

@Component({
  selector: 'md-card-title-group',
  template: require('./card-title-group.html'),
  encapsulation: ViewEncapsulation.None,
})
export class MdCardTitleGroup {}

export const MD_CARD_DIRECTIVES: any[] = [MdCard, MdCardHeader, MdCardTitleGroup];
