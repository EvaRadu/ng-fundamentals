import { UpperCasePipe } from "@angular/common";
import { DebugElement, EventEmitter, Input, NO_ERRORS_SCHEMA, Output } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { element } from "protractor";
import { CollapsibleWellComponent } from "src/app/common";
import { AuthService } from "src/app/user/auth.service";
import { DurationPipe } from "../shared";
import { SessionListComponent } from "./session-list.component"
import { UpvoteComponent } from "./upvote.component";
import { VoterService } from "./voter.service";
import { Component } from "@angular/core";
import { Mock } from "protractor/built/driverProviders";



describe('SessionListComponent', () => {

    let mockAuthService, 
    mockVoterService, 
    fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

    beforeEach(() => {
        mockAuthService = { isAuthenticated: () => true, currentUser: {userName: 'Joe'}};
        mockVoterService = { userHasVoted: () => true };

        TestBed.configureTestingModule({
            declarations: [
                SessionListComponent,
                DurationPipe,
            ],
            providers:[
                {provide: AuthService, useValue: mockAuthService},
                {provide: VoterService, useValue: mockVoterService}
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        });

        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;

    })

    describe('initial display', () => {

        it('should have the correct session title', () => {
            component.sessions = [{id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', 
                                  voters: ['john', 'bob']}];     
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;
            component.ngOnChanges();

            fixture.detectChanges(); 
            
            expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');

        })


    })

})