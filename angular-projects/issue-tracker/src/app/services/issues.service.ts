import { issues } from './../../assets/_mock-data';
import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  // let's use mock data for now
  private issues : Issue[] = issues;
  constructor() { }

  getPendingIssues() : Issue[] {
    // return issues that are not yet completed
    return this.issues.filter(issue => !issue.completed);
  }

  createIssue(issue: Issue) {
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }

  completeIssue(issue: Issue) {
    const selectedIssue: Issue = {...issue, completed: new Date()};
    const index = this.issues.findIndex(i=> i === issue);
    this.issues[index] = selectedIssue;
  }

  getSuggestions(title: string) {
    if(title.length > 3) {
      return this.issues.filter(issue=> issue.title.indexOf(title) !== -1);
    }

    return [];
  }

}
