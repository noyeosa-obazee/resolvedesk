# ResolveDesk — Product Specification

**Version:** 1.1  
**Purpose:** Define what ResolveDesk must do and how it should behave. This document describes product requirements, not implementation choices.

## 1. Product overview

ResolveDesk is a multi-workspace customer support platform. Organisations use it to receive customer requests, assign them to agents, communicate with customers, track progress and review support activity.

A **workspace** represents one organisation. Each workspace has its own members, customers, tickets and settings. Users must not access another workspace's information without authorised membership.

### Problem

Organisations need a central way to manage customer questions, complaints, bug reports and service requests. Without one, requests can be missed, duplicated, left without an owner or handled without a clear history.

### Product goals

- Let customers submit and track requests.
- Give agents a queue for managing and resolving requests.
- Make ticket status and responsibility clear.
- Keep public replies separate from private staff notes.
- Let administrators manage their workspace and team.
- Provide reliable ticket history and useful support reports.
- Keep workspace data separate.

## 2. Users and permissions

### Customer

Customers can submit tickets, view their own tickets, read and send public replies, view ticket status, receive relevant notifications, read published help articles when available, and manage permitted account details.

Customers cannot view another customer's tickets, read internal notes, assign tickets, manage workspace members or change workspace settings.

### Support agent

Agents can view permitted workspace tickets, send public replies, add internal notes, update permitted ticket fields, assign or reassign tickets where allowed, search and filter the queue, and view their workload and relevant notifications.

Agents cannot manage workspace ownership or administrator-only settings unless explicitly permitted.

### Workspace administrator

Administrators can view and manage workspace tickets, invite and deactivate members, assign and reassign tickets, manage workspace settings and categories, review reports, and manage knowledge-base content when available.

Administrator permissions apply only within their own workspace.

**Decide:** whether there is a separate workspace owner role and whether one user can belong to multiple workspaces.

## 3. Core terminology

- **Ticket:** A record of one customer request.
- **Requester:** The customer who submitted the ticket.
- **Assignee:** The agent currently responsible for the ticket.
- **Public reply:** A message visible to the customer and authorised staff.
- **Internal note:** A staff-only message.
- **Status:** The current stage of a ticket.
- **Priority:** The urgency assigned to a ticket.
- **Activity history:** A record of important changes and actions.

## 4. Ticket rules

### Required ticket information

Each ticket has a unique reference, subject, description, requester, workspace, status, priority, optional assignee, creation and update timestamps, and conversation history. A category may be included in the MVP.

### Suggested statuses

- **Open:** Received and awaiting support-team attention.
- **In Progress:** An agent is handling the request.
- **Pending Customer:** The support team needs information or action from the customer.
- **Resolved:** The support team considers the issue addressed.
- **Closed:** The ticket is finished and no longer part of the active queue.

**Decide:** allowed status transitions; whether customers can reopen resolved tickets; whether customer replies automatically reopen tickets; and whether resolved tickets close automatically.

### Suggested priorities

- **Low:** Not time-sensitive.
- **Normal:** Requires attention through the usual support process.
- **High:** Needs attention sooner because of its impact.
- **Urgent:** Requires immediate attention.

**Decide:** whether customers can choose priority or only staff can set it.

### Assignment and visibility

- A ticket may be unassigned or assigned to one eligible agent.
- Unassigned tickets must be visible to authorised staff.
- Only authorised users can assign or reassign tickets.
- An assignee must be an eligible member of the same workspace.
- Reassignment must preserve the previous assignment in activity history.
- Deactivating an agent must not erase their past ticket activity.
- Tickets assigned to inactive agents must be identifiable.
- Customers can view their own tickets and public replies.
- Authorised staff can view tickets according to workspace membership and role.
- Customers must never see internal notes.
- Knowing or guessing a ticket reference must not grant access.

**Decide:** whether agents can assign tickets to colleagues and whether multiple agents can collaborate while one remains the primary assignee.

## 5. Functional requirements

### Module A — Accounts and workspace membership

- Users can register or complete invitation-based onboarding.
- Users can sign in and sign out.
- The system identifies each user's role and workspace membership.
- Users can view and update permitted profile details.
- Administrators can invite, deactivate and reactivate workspace members.
- Unauthenticated users cannot access protected information.
- Deactivated members cannot perform protected workspace actions.
- The system rejects actions not permitted by the user's role or workspace membership.

**User stories:** As a customer, I want to access my account to track requests. As an agent, I want to sign in to handle tickets. As an administrator, I want to manage members so only authorised people can use the workspace.

**Acceptance criteria:** Valid credentials grant appropriate access; invalid credentials do not. Users cannot access a workspace without permission. Deactivated members cannot perform protected actions.

### Module B — Ticket management

- Customers can submit tickets with a subject and description.
- Each ticket is associated with the correct requester and workspace.
- The system generates a unique ticket reference and initial status.
- Customers can list and open their own tickets.
- Agents and administrators can list and open permitted workspace tickets.
- Authorised staff can update status, priority and assignment.
- Users can search and filter tickets by relevant fields.
- Ticket lists support pagination.
- Resolved and closed tickets remain available for authorised review.

**User stories:** As a customer, I want to submit a request and receive a reference so I can follow up. As an agent, I want to find and manage tickets so requests are handled. As an administrator, I want to view workspace tickets to oversee support.

**Acceptance criteria:** Valid submission creates one ticket in the correct workspace. Missing required information produces a clear message. Search, filters and ticket details enforce access rules. Updates change the displayed state. Resolved and closed tickets remain available.

### Module C — Conversations and internal notes

- Customers can reply to tickets they can access.
- Agents can send public replies and add internal notes.
- Each entry identifies its author and creation time.
- Public replies are visible to the requester and authorised staff.
- Internal notes are visible only to authorised staff.
- Conversation history is displayed chronologically.
- Failed message submissions are not shown as successfully saved.

**User stories:** As a customer, I want to reply with information or answers. As an agent, I want to send public replies and private notes to communicate with customers and colleagues.

### Module D — Team management

- Administrators can view workspace members, roles and account statuses.
- Administrators can invite eligible members.
- Administrators can activate or deactivate members.
- Administrators can assign and reassign tickets.
- Administrators can identify each agent's assigned workload.
- Deactivation preserves historical ticket activity.

### Module E — Notifications

- The system creates notifications for relevant events.
- Users can view notifications, distinguish read from unread, and mark them as read.
- Notifications identify the event and related ticket or record.
- Notifications must not reveal information to unauthorised users.

Suggested events: assignment or reassignment; customer reply; public reply; relevant status or priority change; invitation; service deadline approaching, if deadlines are added.

### Module F — Knowledge base

- Authorised staff can create and edit help articles.
- Articles have a title, content and publication state; they may have categories.
- Authorised staff can publish and unpublish articles.
- Customers can browse or search published articles.
- Customers cannot access drafts or staff-only content.

### Module G — Analytics and reporting

- Administrators can view workspace ticket counts by status and priority.
- Administrators can review ticket trends over a selected period and agent workload.
- The system can report first response and resolution times when sufficient data exists.
- Reports identify their date range and metric definitions.
- Reports respect workspace boundaries and permissions.

Metric definitions:

- **Total tickets:** tickets created during the selected period, unless labelled all-time.
- **First response time:** time from ticket creation to the first qualifying public agent reply.
- **Resolution time:** time from ticket creation to the time it is marked resolved.
- **Agent workload:** currently assigned tickets per agent, with exclusions stated.

### Module H — Search and navigation

- Navigation shows areas available to the current role.
- Agents and administrators can search tickets within their permitted workspace.
- Ticket lists can be filtered by status, priority and assignee.
- Active filters are visible and can be cleared.
- Search results obey the same access rules as ticket details.

### Module I — Activity history

- The system records ticket creation, assignment, status and priority changes, replies, notes, resolution and closure.
- Each entry identifies the actor, action and time.
- Relevant changes show previous and new values.
- Authorised staff can review ticket activity.
- Ordinary users cannot alter historical activity records.

## 6. Non-functional requirements

These are initial targets to verify through testing, not claims that the product already meets them.

### Performance

- The main dashboard should become usable within approximately 3 seconds under normal conditions.
- Common actions should normally receive a response within approximately 2 seconds, excluding unusually slow networks or external services.
- Large ticket lists must use pagination.
- Search and filtering should remain usable as data grows.

### Security and privacy

- Passwords and authentication secrets must never be stored or logged in plain text.
- Production communication must be protected in transit.
- Protected actions must enforce authentication, role permissions and workspace membership.
- User input must be validated and handled safely.
- Internal notes and customer information must not be exposed to unauthorised users.
- Secrets must not be committed to public source code.
- Logs must not contain passwords, session secrets or unnecessary sensitive data.

### Reliability

- Unexpected errors must not expose internal implementation details.
- Failed requests must not be presented as successful.
- Saved tickets and messages must remain available after reload and later sign-in.
- The application should communicate temporary service failures clearly.
- Production data should have a defined backup and recovery policy before the product is used for important business operations.

### Scalability

- The product must support multiple independent workspaces.
- It should accommodate growth in users, tickets and messages without changing its fundamental product model.
- Large lists and reports must not require loading all records at once.

### Usability and accessibility

- Common tasks should be easy to find and complete.
- Status, priority and action labels must be consistent.
- Forms must show clear validation messages.
- Loading, empty, success and error states must be handled.
- Important actions should support keyboard navigation.
- Form controls need meaningful labels; text and controls need sufficient contrast.
- Colour must not be the only way information is communicated.

### Compatibility and responsiveness

- Core workflows should work in current major browsers.
- The interface should remain usable on desktop, tablet and mobile screen sizes.
- Essential ticket information and actions must remain accessible on smaller screens.

### Maintainability and testability

- Features should be organised so changes do not unnecessarily break unrelated behaviour.
- Business rules and terminology should be consistent.
- Important workflows and access restrictions must have repeatable tests.
- The project must document setup, product behaviour and important decisions.

### Data integrity

- Every ticket must have a valid requester and workspace.
- Every assignee must be eligible within the same workspace.
- Status and priority values must be valid.
- Messages must remain associated with the correct ticket.
- Deactivation must not erase historical attribution.
- Repeated or concurrent actions must not silently corrupt records or create misleading results.

## 7. MVP scope

The MVP should prove the central support workflow. It does not need every feature in this document.

### Must have

- React application with working navigation.
- Express REST API.
- MongoDB connection using Mongoose.
- User registration and login.
- Customer, agent and administrator roles.
- Workspace membership and isolation.
- Ticket creation, listing and detail views.
- Ticket assignment, status and priority management.
- Customer/agent public conversations and staff-only internal notes.
- Basic ticket search and filtering.
- Basic tests for core workflows and access restrictions.
- Public deployment and setup documentation.

### MVP demonstration

1. An administrator accesses a workspace and makes an agent available.
2. A customer submits a ticket.
3. The ticket appears in the correct workspace queue.
4. An agent opens and takes responsibility for it.
5. The agent updates its status or priority.
6. The agent sends a public reply.
7. The customer reads the reply and responds.
8. The agent adds an internal note that the customer cannot see.
9. The agent resolves the ticket.
10. The administrator reviews the ticket and its history.
11. A user from another workspace cannot access the ticket.

### Later releases

- In-app notifications and unread counts.
- Knowledge base.
- Detailed analytics and reports.
- Ticket categories and configurable categories.
- Attachments and email notifications.
- Agent workload dashboards.
- Customer satisfaction surveys.
- Saved filters and views.

### Long-term possibilities

- Real-time updates.
- Automatic assignment and routing.
- Service-level deadlines and escalations.
- Teams, departments, working hours and agent availability.
- Custom roles, fields and workflows.
- Email, chat and social-channel ticket intake.
- Ticket merging, duplicate detection and canned responses.
- Advanced reporting and exports.
- External integrations and multiple languages.
- Single sign-on, multi-factor authentication and data-retention controls.
- AI-assisted classification or suggested replies, with human review and privacy safeguards.

## 8. User journeys

### Customer submits a ticket

1. Customer opens the support area for an organisation.
2. Customer enters a subject and description and submits.
3. The system validates the information and creates the ticket in the correct workspace.
4. The customer sees confirmation, a ticket reference and current status.

If submission fails, the system explains the problem and does not claim the ticket was saved.

### Agent handles a ticket

1. Agent signs in and opens the queue.
2. Agent finds and opens a ticket.
3. Agent reviews its details and conversation.
4. Agent takes or receives assignment.
5. Agent updates status or priority as needed.
6. Agent sends a public reply or internal note.
7. Agent resolves the ticket when the issue is addressed.

### Agent needs customer information

1. Agent asks for information in a public reply.
2. Agent sets the ticket to Pending Customer.
3. Customer replies.
4. The ticket returns to support attention according to the chosen status rule.

### Administrator invites an agent

1. Administrator invites a person and selects an allowed role.
2. The invitee completes onboarding.
3. The member appears in the workspace and can receive eligible assignments.

### Administrator reviews performance

1. Administrator opens analytics.
2. The system displays metrics for a clearly identified period.
3. Administrator reviews ticket counts, trends and workload.

## 9. Edge cases

- A user tries to access a workspace they do not belong to.
- An agent is deactivated while tickets remain assigned to them.
- An administrator tries to remove the last administrator.
- A customer submits invalid information or submits twice.
- Two agents update the same ticket.
- A ticket is updated while a customer reply arrives.
- A user tries to update a closed ticket.
- A customer attempts to access another customer's ticket by changing its reference.
- A message fails to save or is submitted more than once.
- A customer attempts to view an internal note.
- A notification relates to a ticket the recipient can no longer access.
- A report has no data for the selected period.
- A ticket is reopened after resolution.
- A workspace has many tickets.

## 10. Decisions to make through research

Record the decision, reason, alternatives and consequences for each item.

- Customer onboarding: registration, invitation or guest submission.
- Workspace creation and multiple workspace membership.
- Workspace owner role and ownership transfer.
- Ticket visibility and shared customer access.
- Assignment permissions and agent collaboration.
- Status transitions, reopening and automatic closure.
- Who sets priority.
- Fixed or workspace-configurable categories.
- Who can create, view, edit or delete internal notes.
- Attachment types, size limits and access rules.
- Notification events and delivery channels.
- Knowledge-base visibility and publishing permissions.
- Analytics definitions and reporting periods.
- Data retention and deletion policy.
- Whether service deadlines are needed.
- Which channels can create tickets in future releases.

## 11. Research areas

Research customer support workflows, role and permission models, multi-workspace data separation, ticket status and assignment rules, public replies versus internal notes, support metrics, knowledge-base publishing, privacy and data retention, secure attachments, accessibility and responsive interfaces.

For each feature, ask: What user problem does it solve? Who can use it? What information does it need? What happens when it fails? Is it essential for the MVP? What simpler alternative could meet the same need?

## 12. MVP completion checklist

- [ ] Customers, agents and administrators can access the appropriate areas.
- [ ] Workspace information is isolated.
- [ ] Customers can submit and view their own tickets.
- [ ] Agents can find, assign and manage tickets.
- [ ] Customers and agents can exchange public messages.
- [ ] Agents can add internal notes that customers cannot see.
- [ ] Ticket information and messages persist after reload and later sign-in.
- [ ] Invalid input and unauthorised actions are handled clearly and safely.
- [ ] Core workflows and access restrictions have been tested.
- [ ] The application is deployed and has setup documentation.

## 13. Glossary

- **Authentication:** Establishing who is using the application.
- **Authorisation:** Determining what a user is allowed to do.
- **Workspace:** A separate organisation's area within ResolveDesk.
- **Multi-workspace:** Multiple organisations use the product while their information remains separated.
- **SLA:** A defined service expectation, such as a target response or resolution time.
- **First response time:** Time from ticket creation to the first qualifying public agent reply.
- **Resolution time:** Time from ticket creation to the time it is marked resolved.
- **Audit history:** A record of important actions and changes.
- **MVP:** The smallest coherent version that delivers the product's central value.

## 14. Document maintenance

Update this specification when research changes a product decision or product behaviour. Keep the MVP limited to the central workflow. Do not add a feature solely because another platform has it. Ensure every new feature respects workspace isolation, permissions and customer privacy.
