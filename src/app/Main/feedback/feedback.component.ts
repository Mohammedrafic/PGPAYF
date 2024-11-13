import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  ngOnInit(): void {
  }

  feedbackForm: FormGroup;
  feedbackTypes: string[] = ['Bug Report', 'Feature Request', 'General Feedback'];
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      feedbackType: ['', Validators.required],
      rating: [3],
      comments: ['']
    });
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      const formData = this.feedbackForm.value;
      console.log('Feedback submitted:', formData);
      this.submitted = true;
      this.feedbackForm.reset();
    }
  }
}
