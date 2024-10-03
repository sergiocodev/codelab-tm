import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export default class CoursesComponent {
  private _router: Router = inject(Router)
  private _activatedRouter: ActivatedRoute = inject(ActivatedRoute)

  public viewInfoCourse(name: string) {
    const commands = ['info', name];
    const extras = {relativeTo: this._activatedRouter}

    this._router.navigate(commands, extras).then()
  }
}
