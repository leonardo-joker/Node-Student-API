class Student {
  constructor(id, fullName, email, department, gpa) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.department = department;
    this.gpa = gpa;
    this.isEnrolled = true;
  }

  validate() {
    if (!this.fullName) throw new Error('Full name is required.');
    if (!this.email) throw new Error('Valid email is required.');
    if (!this.department) throw new Error('Department is required.');
    if (isNaN(this.gpa) || this.gpa < 0 || this.gpa > 5.0)
      throw new Error('GPA must be between 0.0 and 5.0.');

    return true;
  }
}

export default Student;
