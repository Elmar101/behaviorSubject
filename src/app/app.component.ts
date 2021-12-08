import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  behaviorSubject$: BehaviorSubject<number>;
  ngOnInit(): void {
    this.behaviorSubject$ = new BehaviorSubject(0);
    this.behaviorSubject$.subscribe((data) =>
      console.log("observerA = ", data)
    );
    this.behaviorSubject$.subscribe((data) =>
      console.log("observerB = ", data)
    );
    this.behaviorSubject$.next(1);
    this.behaviorSubject$.next(2);
    this.behaviorSubject$.complete();
    this.behaviorSubject$.next(3);
    this.behaviorSubject$.subscribe((data) =>
      console.log("observerC = ", data)
    );
    this.behaviorSubject$.next(5);
  }
}
