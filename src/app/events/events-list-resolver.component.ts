import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { EventService } from "./shared/event.service";
import { map } from "rxjs/operators";

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {

    }

    resolve() {
        return this.eventService.getEvents()
    }
}
