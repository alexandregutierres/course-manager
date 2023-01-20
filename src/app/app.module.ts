import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from 'src/courses/course-list.component';
import { StarComponent } from 'src/star/star.component';
import { ReplacePipe } from 'src/pipe/replace.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CourseListComponent,
        StarComponent,
        ReplacePipe
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule
        
    ]
})
export class AppModule { }
