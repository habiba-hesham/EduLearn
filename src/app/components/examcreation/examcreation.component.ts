import { Component } from '@angular/core';
import { MenuComponent } from "../Admin/admin-menu/menu.component";
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Course } from '../../interfaces/course';
import { FormArray} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-examcreation',
    standalone: true,
    templateUrl: './examcreation.component.html',
    styleUrl: './examcreation.component.css',
    imports: [CommonModule, FormsModule, RouterModule,
      ReactiveFormsModule, MenuComponent]
})
export class ExamcreationComponent {
  cardForm: FormGroup;
  firestore: any;
  courseId: any;
  lec: string[] = ["lecture 1"]
  course: Course = {
    id: '',
    title: 'username',
    description: 'email',
    img: 'role',
    lectures: this.lec,
  };
  lengthOfLectures = this.course.lectures.length;
  constructor(private coursesService: CoursesService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder){
    this.cardForm = this.fb.group({
      cards: this.fb.array([])}
    );
    this.addCard();
  }

  get cardControls() {
    return (this.cardForm.get('cards') as FormArray).controls;
  }

  addCard() {
    const cards = this.cardForm.get('cards') as FormArray;
    cards.push(this.fb.group({
      title: '',
      content: ''
    }));
  }
  deleteCard(index: number) {
    const cards = this.cardForm.get('cards') as FormArray;
    cards.removeAt(index);
  }

}
