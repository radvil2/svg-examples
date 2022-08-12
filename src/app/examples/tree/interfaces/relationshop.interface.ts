export interface Relationship {
  employeeId: number;
  managerId: number;
  type: string; // "Manager" or "Sub-manager"
}
