import { Component, OnInit } from "@angular/core";
import MOCK_DATA from "../../../assets/sample-data/employees.json";
import { Employee, Relationship } from "./interfaces";

@Component({
  selector: "app-tree",
  styleUrls: ["./tree.component.scss"],
  templateUrl: "./tree.component.html",
})
export class TreeComponent implements OnInit {
  public employees: Employee[] = [];

  public relationships: Relationship[] = [];

  public zoom = 10;

  public searchKeyword = "";

  ngOnInit(): void {
    this.employees = MOCK_DATA.employees;
    this.relationships = MOCK_DATA.relationships;
    this.filterByKeyword();
  }

  getEmployee(id: Employee["id"]): Employee | undefined {
    return this.employees.find((emp) => emp.id === id);
  }

  isSubManager(relationshipType: Relationship["type"]) {
    return relationshipType === "Sub-manager";
  }

  zoomIn(): void {
    this.zoom += 1;
  }

  zoomOut(): void {
    if (this.zoom > 1) {
      this.zoom -= 1;
    }
  }

  zoomReset(): void {
    this.zoom = 10;
  }

  onSvgMouseWheel(event: any) {
    if (event.deltaY < 0) {
      this.zoomIn();
    } else {
      this.zoomOut();
    }
    return false;
  }

  filterByKeyword() {
    if (!this.employees || !this.searchKeyword) {
      return;
    }

    const keyword = this.searchKeyword.toLowerCase();

    this.employees.filter((employee) => {
      if (
        !keyword ||
        employee.firstName.toLowerCase().includes(keyword) ||
        employee.lastName.toLowerCase().includes(keyword)
      ) {
        employee.highlighted = true;
      } else {
        employee.highlighted = false;
      }
      return employee;
    });

    this.employees = this.employees.map((e) => {
      if (!keyword) e.highlighted = true;
      else if (
        e.firstName.toLowerCase().includes(keyword) ||
        e.lastName.toLowerCase().includes(keyword)
      ) {
        e.highlighted = true;
      } else {
        e.highlighted = false;
      }
      return e;
    });
  }
}
