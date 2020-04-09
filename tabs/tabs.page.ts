import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"]
})
export class TabsPage {
  constructor(private route: Router) {}
  logout(): void {
    window.localStorage.removeItem("token");
    this.route.navigateByUrl("login");
  }
}