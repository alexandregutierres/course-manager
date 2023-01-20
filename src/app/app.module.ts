import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from 'src/courses/course-list.component';
import { StarComponent } from 'src/star/star.component';
import { ReplacePipe } from 'src/pipe/replace.pipe';
import { NavBarComponent } from 'src/nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from 'src/courses/course-info.component';

@NgModule({
    declarations: [
        AppComponent,
        CourseListComponent,
        StarComponent,
        ReplacePipe,
        NavBarComponent,
        Error404Component,
        CourseInfoComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { 
                path: 'courses' , component: CourseListComponent
            },
            {
                path: 'courses/info/:id', component:CourseInfoComponent
            },
            { 
                path: '' , redirectTo: 'courses', pathMatch: 'full'
            },
            {
                path: '**', component: Error404Component
            }
        ])
        
    ]
})
export class AppModule { }
