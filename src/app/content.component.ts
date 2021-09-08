import { Component } from '@angular/core';

@Component({
  selector: 'content-comp',
  template:
    `<div>
      <ng-content></ng-content>
    </div>`,
  styles: [ `
    div { border: medium dashed green; padding: 1em; width: 150px; text-align: center}
  `]
})
export class ContentComponent { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/