# ResolveDesk --- Product Requirements & Behaviour Specification

**Document type:** Product requirements / stakeholder specification\
**Product:** ResolveDesk\
**Version:** 1.0 --- initial project baseline\
**Status:** Working specification; decisions marked "To decide" are
intentionally left open\
**Audience:** Product owner, stakeholders, designer, developer, tester
and future contributors

---

## 1. Purpose of this document

This document describes what ResolveDesk is intended to do and how it
should behave from the perspective of the people and organisations using
it. It is the product reference for planning, implementation, testing
and future improvements.

It deliberately focuses on **product behaviour and requirements**, not
on programming languages, frameworks, database products, hosting
providers or implementation patterns. Those are engineering decisions
for the developer to research and make.

The document is detailed enough to guide implementation, but it is not a
command to build every listed feature immediately. The project is
divided into:

- **MVP:** the smallest coherent version that delivers the central
  value of the product.
- **Subsequent releases:** useful capabilities that build on the MVP.
- **Long-term possibilities:** advanced features that may be
  appropriate if the product grows.

Where a product decision is not settled, it is labelled **To decide**.
Do not silently treat an undecided point as a requirement. Research the
options, choose deliberately, and record the decision.

## 2. Product overview

ResolveDesk is a multi-workspace customer support and service management
platform. It gives an organisation one central place to receive customer
requests, organise and assign those requests, communicate with
customers, track progress and understand how effectively its support
operation is performing.

A company using ResolveDesk is referred to as a **workspace**. A
workspace represents one organisation or support team using the
platform. It has its own users, customers, agents, administrators,
tickets, categories, articles and operational information.

A customer submits a request. The request becomes a **ticket**. Support
agents work on tickets, communicate with the customer and move the
ticket through its lifecycle. Workspace administrators oversee users,
workload, settings and service performance.

ResolveDesk is not merely a contact form or a list of complaints. It is
intended to support the full service process:

1.  A customer needs help.
2.  The customer submits a request and receives a trackable reference.
3.  The request enters the organisation's support queue.
4.  An authorised person takes responsibility for it.
5.  The customer and support team communicate in the context of the
    request.
6.  The team investigates, responds and records progress.
7.  The request is resolved or otherwise closed.
8.  The organisation can review what happened and identify patterns or
    areas for improvement.

### 2.1 The problem ResolveDesk addresses

Organisations may receive questions, complaints, bug reports, service
requests and other enquiries through many channels. Without a central
process, requests can be lost, duplicated, forgotten, handled
inconsistently or left without a clear owner.

Employees may struggle to know:

- Which requests are waiting for attention.
- Who is responsible for each request.
- Which requests are urgent.
- What has already been communicated to a customer.
- Which requests are waiting for the customer.
- How long requests have remained unresolved.
- Whether the support team is meeting its service expectations.
- Which issues occur repeatedly.

Customers may struggle to know whether their request was received, who
is handling it, whether anyone is working on it or what they should do
next.

ResolveDesk aims to provide visibility, accountability, communication
history and useful operational insight.

### 2.2 Product goals

ResolveDesk should:

1.  Give customers a clear way to submit and track support requests.
2.  Give support agents an organised place to review, prioritise and
    resolve requests.
3.  Make responsibility for each active request visible.
4.  Keep customer-facing replies and private staff discussions distinct.
5.  Give administrators control over their support workspace and team.
6.  Give the organisation a reliable history of ticket activity.
7.  Help the organisation understand its support workload and
    performance.
8.  Keep each organisation's information separate from other
    organisations using the platform.

### 2.3 What success looks like

A successful first release should allow a small organisation to use
ResolveDesk for a basic support operation without relying on
spreadsheets or disconnected messages to track its tickets.

A customer should be able to submit a request, find it later, read
replies and respond. An agent should be able to find the request, take
responsibility for it, communicate with the customer and update its
status. An administrator should be able to manage the workspace's people
and review the ticket queue.

The product should make it difficult for a request to become invisible
or ownerless without that condition being apparent to the support team.

---

## 3. Users, organisations and terminology

### 3.1 Workspace

A workspace is an organisation's separate operating area within
ResolveDesk. It contains that organisation's users, support tickets,
conversations, categories, settings and other records.

A company should not be able to view or manage another company's
workspace information. A person may potentially belong to more than one
workspace, but the initial release does not have to support that unless
it is deliberately included.

**Important product rule:** workspace separation is a fundamental
product requirement, not a cosmetic feature. Every workspace-owned
record must be associated with the correct workspace, and every user
action must be checked against the workspace in which the action is
being performed.

### 3.2 User roles

The initial product has three main roles. The role determines what a
person is permitted to do. A role is not merely a label displayed beside
a name.

#### Customer

A customer is a person who seeks help from an organisation.

A customer should be able to:

- Access the support area for the relevant organisation.
- Submit a new support ticket.
- View their own tickets.
- Read public replies on their tickets.
- Reply to an existing ticket.
- See the status and other customer-visible details of their tickets.
- Receive notifications about relevant ticket activity.
- Read published knowledge-base articles when that feature is
  available.
- Manage permitted personal account details.

A customer must not be able to:

- View another customer's private tickets unless the organisation
  deliberately introduces shared or delegated access.
- Read internal staff notes.
- Assign tickets to agents.
- change administrative settings.
- Manage agents or other workspace users.

#### Support agent

An agent is a member of the organisation's support team who handles
customer requests.

An agent should be able to:

- View the tickets they are permitted to handle.
- Open ticket details and read the conversation history.
- Reply publicly to customers.
- Add private internal notes for other authorised staff.
- Change permitted ticket fields, such as status and priority.
- Assign or reassign tickets if their permissions allow it.
- View their own assigned workload.
- Receive notifications about relevant ticket events.
- Search and filter the ticket queue.

An agent must not automatically have permission to manage workspace
ownership, billing or all administrative settings. The organisation may
later define more granular permissions.

#### Workspace administrator

An administrator manages the organisation's ResolveDesk workspace.

An administrator should be able to:

- View and manage workspace tickets.
- Manage agents and other workspace members.
- Invite people to join the workspace.
- Assign and reassign tickets.
- Configure workspace-level support settings.
- Manage ticket categories and priorities where configurable.
- Review workspace-wide reports and analytics.
- Review relevant activity history.
- Publish and manage knowledge-base content when that feature is
  available.

An administrator's access is limited to their own workspace. Being an
administrator in one workspace must not grant access to another
workspace.

**To decide:** whether the initial product has one administrator role or
distinguishes between an owner and one or more administrators. A
workspace owner may have special powers, such as transferring ownership
or deleting the workspace.

### 3.3 Other terms

---

Term Meaning

---

Ticket A record representing one customer
support request or issue.

Ticket requester The customer who submitted the
ticket.

Assignee The agent currently responsible for
handling a ticket.

Unassigned ticket A ticket that has not yet been
assigned to an agent.

Public reply A message visible to the customer
and authorised support staff.

Internal note A staff-only message that the
customer cannot see.

Ticket status The current stage of a ticket's
lifecycle.

Priority The urgency or importance assigned
to a ticket.

Category A classification used to organise
and report on tickets.

Workspace member A person who has an account and
membership in a workspace.

Activity history A record of important actions
performed on a ticket or within a
workspace.

Knowledge-base article A help document published for
customers or staff.
-----------------------------------------------------------------------

---

## 4. Product boundaries and assumptions

### 4.1 Included in the product vision

ResolveDesk is intended to manage support requests from submission
through resolution. It includes customer-facing and staff-facing
experiences, team administration, communication, notifications,
reporting and self-service help content.

### 4.2 Not required for the first release

The first release does not need to replace every communication or
business system an organisation already uses. It does not need to
provide a full telephone call centre, social-media management suite,
billing system, CRM, software issue tracker or project-management suite.

Integrations with those systems may be considered later.

### 4.3 Initial assumptions

The following assumptions help define a coherent starting product. They
should be revisited if research suggests otherwise.

- An organisation has at least one administrator and may have one or
  more agents.
- A customer submits a request to a particular organisation.
- A ticket belongs to one workspace.
- A ticket has one requester.
- A ticket may have one current assignee or be unassigned.
- A ticket has one current status and one current priority.
- A ticket can contain multiple messages and internal notes.
- Public replies are visible to the requester; internal notes are not.
- A ticket's important changes should be traceable.
- Different workspaces must be isolated from one another.
- A customer may have more than one ticket over time.

**To decide:** whether customers create accounts themselves, are invited
by an organisation, or can submit a request first and create/access an
account later. This affects the customer onboarding experience and
ticket ownership rules.

---

## 5. Ticket lifecycle and business rules

The ticket is the central record in ResolveDesk. Other
features---conversations, assignments, notifications, reporting and
activity history---exist partly to support the ticket lifecycle.

### 5.1 Ticket information

A ticket should contain, at minimum:

- A unique ticket reference that people can use to identify it.
- A short subject or title.
- A description of the customer's issue or request.
- The customer who submitted it.
- The workspace to which it belongs.
- Its current status.
- Its current priority.
- Its category, if categorisation is enabled.
- Its current assignee, if assigned.
- Its creation date and time.
- Its last-updated date and time.
- Its conversation history.

Additional information may include attachments, tags, source channel,
due date, product area, custom fields and satisfaction feedback. These
are not all necessary for the MVP.

### 5.2 Suggested ticket statuses

The product should use a clear set of statuses that communicate the
ticket's current state.

---

Status Meaning Typical next action

---

Open The request has been An agent reviews or
received and needs takes ownership.
support-team attention.

In Progress An agent is actively The agent works on it
investigating or and communicates
handling the request. progress.

Pending Customer The support team needs The customer replies or
information or action provides the requested
from the customer. information.

Resolved The support team The customer may
believes the issue has confirm, or the ticket
been addressed. may later close.

Closed The ticket is Reopening may be
considered finished and restricted or handled
is no longer part of through a new ticket.
the active queue.
-----------------------------------------------------------------------

These are proposed product meanings, not a mandatory implementation of a
particular workflow.

**Questions to decide:**

- Can customers reopen a resolved ticket?
- Does a resolved ticket close automatically after a period?
- Can a closed ticket ever be reopened?
- Should an agent be able to move a ticket directly from Open to
  Resolved?
- Does a customer reply to a Resolved ticket automatically reopen it?
- Should Pending Customer tickets be excluded from an agent's active
  workload?

The chosen rules should be consistent and explained to users.

### 5.3 Suggested priorities

---

Priority Meaning

---

Low The request is not time-sensitive
and can be handled during normal
work.

Normal The request needs attention within
the ordinary support process.

High The request has significant impact
or should be handled sooner than
normal.

Urgent The request requires immediate
attention because of serious impact
or time sensitivity.
-----------------------------------------------------------------------

Priority should communicate urgency, not simply how unhappy a customer
is. The organisation may later define its own priority criteria.

**To decide:** whether customers can select a priority when submitting a
ticket or whether the support team alone controls it. Allowing customers
to select priority can provide useful context, but customers may overuse
the highest priority. A compromise is to let customers describe impact
while agents determine the official priority.

### 5.4 Ticket ownership and assignment

Every ticket should have a clear requester and workspace. Assignment to
an agent may be optional at the moment of creation, but unassigned
tickets must be visible to authorised staff.

An authorised agent or administrator should be able to assign a ticket
to an eligible agent. Reassignment should update the current owner and
preserve a record of the change.

The product should make the following states distinguishable:

- Unassigned.
- Assigned to the current user.
- Assigned to another agent.
- Assigned to an agent who is no longer active or eligible.

**Business rules:**

- A ticket must not be assigned to a person who is not an eligible
  member of that workspace.
- Deactivating an agent must not silently erase the history of tickets
  they previously handled.
- The organisation needs a way to identify tickets whose assignee is
  no longer active.
- Reassignment should be traceable.
- The product should prevent unauthorised users from changing
  assignments.

**To decide:** whether agents can assign tickets to one another, whether
only administrators can do so, and whether multiple agents can
collaborate on one ticket while one person remains the primary assignee.

### 5.5 Ticket visibility

Ticket visibility is a critical business rule.

- The requester can view their own ticket and its public conversation.
- Authorised agents and administrators in the ticket's workspace can
  view the ticket according to their permissions.
- A customer must never see an internal note.
- A user from another workspace must never see the ticket.
- A customer must not gain access to another customer's ticket merely
  by guessing or changing a ticket reference.

A ticket reference is an identifier, not proof of permission.

---

## 6. Functional requirements and user stories

The requirements below describe what the system should do. Each user
story explains the value from a user's perspective. Acceptance criteria
describe observable behaviour that can be used to judge whether a
requirement is satisfied.

### Module A --- Authentication, accounts and workspace membership

**Purpose:** Establish who is using the application and which workspace
they are acting within. Authentication answers "Who are you?"
Authorisation answers "What are you allowed to do?"

#### Functional requirements

A1. A person must be able to create an account or accept an invitation,
according to the chosen onboarding policy.

A2. A registered user must be able to sign in and sign out.

A3. The system must distinguish customers, agents and administrators.

A4. A user must only be able to perform actions permitted by their role
and workspace membership.

A5. A user must be able to view and update permitted profile
information.

A6. A user must receive an understandable message when authentication
fails, without the application revealing sensitive account information.

A7. An administrator must be able to invite an eligible person to join
their workspace.

A8. An administrator must be able to deactivate or reactivate a
workspace member, subject to the workspace's ownership rules.

A9. A user who is not authenticated must not be able to access protected
account or ticket information.

A10. The system must handle expired, invalid or revoked access sessions
appropriately.

#### User stories

- As a customer, I want to create or access my account so that I can
  submit and track my support requests.
- As an agent, I want to sign in securely so that I can access my
  support workspace.
- As an administrator, I want to invite agents so that my support team
  can use the platform.
- As an administrator, I want to deactivate a former employee so that
  they can no longer access the workspace.
- As a user, I want to sign out so that another person using the same
  device cannot continue using my account.

#### Acceptance criteria

- A user with valid credentials can access the appropriate area of the
  application.
- Invalid credentials do not grant access.
- A user without an active workspace membership cannot access that
  workspace's protected information.
- A customer cannot access agent-only or administrator-only functions.
- An agent cannot perform administrator-only actions unless explicitly
  granted that permission.
- A deactivated member cannot continue performing protected workspace
  actions.
- Signing out ends the user's authenticated session according to the
  product's session rules.

#### Later possibilities

Password reset, email verification, multi-factor authentication, single
sign-on, account lockout policies, multiple workspace memberships,
granular permissions, invitation expiry and audit reporting for account
administration.

---

### Module B --- Ticket creation and management

**Purpose:** Give customers a clear way to submit requests and give
support staff a reliable queue for handling them.

#### Functional requirements

B1. A customer must be able to submit a ticket with a subject and
description.

B2. The system must associate a newly submitted ticket with the correct
workspace and requester.

B3. The system must generate a unique, human-readable ticket reference.

B4. A newly submitted ticket must receive an initial status and priority
according to the product's rules.

B5. An authorised user must be able to view a list of tickets they are
permitted to access.

B6. An authorised user must be able to open a ticket and view its
details.

B7. An authorised agent or administrator must be able to update
permitted ticket fields.

B8. An authorised user must be able to assign or reassign a ticket
according to the assignment policy.

B9. An authorised user must be able to change a ticket's status
according to the ticket lifecycle rules.

B10. An authorised user must be able to change a ticket's priority
according to their permissions.

B11. Users must be able to search and filter tickets using relevant
fields.

B12. Ticket lists must support navigation through large result sets.

B13. The system must display useful empty states when a user has no
tickets or a filter returns no results.

B14. The system must preserve ticket history when a ticket is resolved
or closed.

#### User stories

- As a customer, I want to submit a support request so that the
  company knows what help I need.
- As a customer, I want a ticket reference so that I can identify and
  follow up on my request.
- As an agent, I want to see tickets waiting for attention so that
  requests do not get overlooked.
- As an agent, I want to filter tickets by status and priority so that
  I can focus on the most relevant work.
- As an agent, I want to assign a ticket to myself or another eligible
  agent so that responsibility is clear.
- As an administrator, I want to view all tickets in my workspace so
  that I can oversee support operations.
- As a customer, I want to see the current status of my ticket so that
  I know whether it is being handled.

#### Acceptance criteria

- A valid ticket submission creates one ticket associated with the
  correct requester and workspace.
- A submission with missing required information is rejected with
  clear guidance.
- A customer can see their own ticket but cannot see another
  customer's private ticket.
- An agent sees only tickets within the workspaces and permissions
  available to them.
- Changing a ticket's status or assignee updates the displayed ticket
  state.
- Search and filters do not expose tickets outside the user's
  permitted scope.
- Ticket lists do not require all matching records to be displayed at
  once.
- A ticket remains available for authorised review after resolution or
  closure.

#### Later possibilities

Bulk updates, saved views, custom fields, tags, ticket merging,
duplicate detection, parent/child tickets, recurring tickets, ticket
templates, service-level deadlines, escalation rules, custom workflows
and multiple request channels.

---

### Module C --- Ticket conversations and internal notes

**Purpose:** Keep all communication about a support request in one
contextual history, while protecting private staff discussions.

#### Functional requirements

C1. A customer must be able to send a message on a ticket they are
authorised to access.

C2. An authorised agent must be able to send a public reply to the
ticket requester.

C3. An authorised staff member must be able to add an internal note.

C4. Each conversation entry must identify its author and creation time.

C5. The system must distinguish public replies from internal notes.

C6. Customers must only receive and view public replies.

C7. Authorised staff must be able to view internal notes according to
their workspace permissions.

C8. Conversation entries should be displayed in a clear chronological
order.

C9. The system must preserve previous messages when a ticket's status,
priority or assignee changes.

C10. The system must provide clear feedback when a message cannot be
sent.

#### User stories

- As a customer, I want to reply to a ticket so that I can provide
  more information or answer an agent's question.
- As an agent, I want to reply publicly so that I can communicate
  directly with the customer.
- As an agent, I want to add an internal note so that I can share
  context with colleagues without exposing it to the customer.
- As an agent, I want to see the ticket's previous conversation so
  that I do not ask the customer to repeat information unnecessarily.

#### Acceptance criteria

- A public reply is visible to the requester and authorised staff.
- An internal note is not visible to the customer through the
  interface or customer-facing data responses.
- Every message has an identifiable author and timestamp.
- A user cannot add a message to a ticket they are not authorised to
  access.
- A failed message submission does not falsely appear as a
  successfully saved message.
- Conversation history remains associated with the correct ticket.

#### Later possibilities

File attachments, inline images, message editing with edit history,
message deletion policies, rich-text formatting, canned responses,
message templates, @mentions, typing indicators and real-time
conversation updates.

---

### Module D --- Team and agent management

**Purpose:** Help administrators organise the people responsible for
support work.

#### Functional requirements

D1. An administrator must be able to view workspace members.

D2. An administrator must be able to invite a person to become an agent
or another permitted workspace member.

D3. An administrator must be able to view a member's role and account
status.

D4. An administrator must be able to activate or deactivate eligible
members.

D5. An administrator must be able to assign tickets to eligible agents.

D6. An administrator must be able to reassign tickets when an agent is
unavailable or leaves the organisation.

D7. The system must make it possible to identify an agent's current
assigned workload.

D8. The system must preserve historical attribution when a member is
deactivated.

#### User stories

- As an administrator, I want to see the members of my workspace so
  that I know who has access.
- As an administrator, I want to invite a new agent so that the
  support team can grow.
- As an administrator, I want to deactivate a former employee so that
  access is removed.
- As an administrator, I want to review agent workloads so that work
  can be distributed sensibly.

#### Acceptance criteria

- Only authorised administrators can manage workspace membership.
- An invitation is associated with the correct workspace and intended
  role.
- An ineligible or deactivated member cannot receive new ticket
  assignments.
- Existing tickets assigned to a deactivated agent remain visible and
  retain their history.
- The administrator can identify tickets that need reassignment.

#### Later possibilities

Teams and departments, working hours, agent availability, skills,
workload limits, round-robin assignment, automatic routing, team-level
permissions, leave schedules and performance coaching views.

---

### Module E --- Notifications

**Purpose:** Make users aware of important events without requiring them
to constantly check every ticket.

#### Functional requirements

E1. The system must identify events that should produce a notification.

E2. A user must be able to view notifications relevant to them.

E3. A notification must communicate what happened and provide enough
context to identify the related ticket or event.

E4. A user must be able to distinguish read notifications from unread
notifications.

E5. A user must be able to mark a notification as read.

E6. A user must not receive notifications about workspace information
they are not authorised to access.

E7. The system must avoid notifying a user about irrelevant events where
practical.

#### Suggested notification events

- A ticket is assigned to an agent.
- A ticket assigned to an agent is reassigned.
- A customer replies to a ticket.
- An agent sends a public reply to a customer.
- An internal note is added for staff who are intended to see it.
- A ticket's status or priority changes, when relevant to the
  recipient.
- An administrator invites a person to a workspace.
- A ticket is approaching or has passed a service deadline, if
  deadlines are introduced.

#### User stories

- As an agent, I want to know when a ticket is assigned to me so that
  I can take responsibility for it.
- As a customer, I want to know when an agent replies so that I can
  continue the conversation.
- As a user, I want to see which notifications I have not read so that
  I do not miss important updates.

#### Acceptance criteria

- A relevant event creates a notification for the intended recipient.
- A user can view their own notifications.
- Marking a notification as read changes its read state.
- A notification does not reveal private ticket information to an
  unauthorised user.
- The notification links or otherwise identifies the relevant ticket
  where appropriate.

#### Later possibilities

Email notifications, browser push notifications, notification
preferences, digest emails, notification grouping, delivery retries,
SMS, mobile push and real-time in-app updates.

---

### Module F --- Knowledge base

**Purpose:** Allow organisations to publish helpful information so
customers can solve common problems without always submitting a ticket.

#### Functional requirements

F1. Authorised staff must be able to create a knowledge-base article.

F2. Authorised staff must be able to edit an article.

F3. Articles must have a title and body.

F4. Articles may be organised into categories.

F5. An authorised person must be able to publish or unpublish an
article.

F6. Customers must only be able to view published articles intended for
them.

F7. Customers must be able to search or browse published articles.

F8. The system must distinguish drafts from published content.

F9. The system must prevent customers from accessing unpublished or
staff-only content.

#### User stories

- As an administrator, I want to publish help articles so that
  customers can find answers to common questions.
- As a customer, I want to search help articles so that I can solve a
  problem without waiting for an agent.
- As an authorised staff member, I want to update an article so that
  outdated guidance can be corrected.

#### Acceptance criteria

- An unpublished article is not visible in the public knowledge base.
- A published article can be found through the available browsing or
  search experience.
- Only authorised staff can create, edit or publish articles.
- Customers cannot access staff-only articles.

#### Later possibilities

Article version history, helpful/not-helpful feedback, article
analytics, related articles, multilingual articles, approval workflows,
attachments, SEO controls and suggested articles during ticket
submission.

---

### Module G --- Analytics and reporting

**Purpose:** Help administrators understand support demand, workload and
outcomes. Reports should support decisions, not simply display
attractive numbers.

#### Functional requirements

G1. Administrators must be able to view a workspace-level support
overview.

G2. The overview should show ticket counts by relevant status.

G3. The overview should show ticket counts by priority.

G4. Administrators should be able to view ticket trends over a selected
period.

G5. Administrators should be able to review agent workload.

G6. The system should provide clearly defined calculations for response
and resolution measurements when sufficient data exists.

G7. Reports must respect workspace boundaries and reporting permissions.

G8. Reports must identify the period and definitions used to calculate
the displayed metrics.

#### Suggested metrics and definitions

---

Metric Suggested definition Why it matters

---

Total tickets Number of tickets Shows incoming demand.
created within the  
selected period, unless
the report explicitly  
says all-time total.

Open tickets Number of tickets Shows requests awaiting
currently in Open attention.
status.

In-progress tickets Number of tickets Shows active work.
currently being  
handled.

Pending customer Number of tickets Separates blocked work
currently waiting for from agent work.
customer input.

Resolved tickets Number of tickets Shows progress and
currently in Resolved outcomes.
status, or resolved  
during the selected  
period---make the  
distinction explicit.

Closed tickets Number of tickets Shows completed work.
currently in Closed  
status, or closed  
during the selected  
period---make the  
distinction explicit.

Unassigned tickets Number of tickets Reveals requests
without an eligible without clear
current assignee. ownership.

Average first response Average elapsed time Indicates how quickly
time between ticket creation customers first hear
and the first from support.
qualifying public agent
response.

Average resolution time Average elapsed time Indicates how long
between ticket creation customers wait for a
and resolution. resolution.

Tickets by priority Count of tickets in Shows urgency
each priority category. distribution.

Tickets by category Count of tickets in Identifies common issue
each category. areas.

Agent workload Number of currently Helps identify uneven
assigned tickets per distribution.
agent, with any  
exclusions clearly  
stated.
-----------------------------------------------------------------------

**Important:** Metrics can be misleading if their definitions are
unclear. For example, "resolved tickets" could mean tickets currently in
Resolved status or tickets that reached Resolved at any point during a
date range. Those are different questions. Define each metric before
implementing it.

#### User stories

- As an administrator, I want to see how many tickets are open, in
  progress and resolved so that I understand the current workload.
- As an administrator, I want to see ticket trends over time so that I
  can identify increases in support demand.
- As an administrator, I want to compare agent workloads so that I can
  identify uneven distribution.
- As an administrator, I want to understand response and resolution
  times so that I can evaluate the support process.

#### Acceptance criteria

- Only authorised users can access workspace-wide reports.
- Every displayed metric has a clear definition.
- The selected date range is visible.
- Empty or insufficient data is represented honestly rather than as a
  misleading value.
- A report for one workspace never includes another workspace's data.

#### Later possibilities

Custom report builder, export to CSV/PDF, saved reports, scheduled
reports, SLA compliance, customer satisfaction trends, agent performance
breakdowns, forecasts, cohort analysis and comparisons across periods.

---

### Module H --- Search, filtering and navigation

**Purpose:** Help users find the information they need without manually
browsing every record.

#### Functional requirements

H1. Users must be able to navigate between the areas available to their
role.

H2. Agents and administrators must be able to search tickets within
their permitted workspace.

H3. Ticket lists should be filterable by status, priority, assignee and
other relevant attributes.

H4. Users should be able to combine relevant filters where appropriate.

H5. The system must make active filters visible and provide a way to
clear them.

H6. Search results must obey the same visibility and permission rules as
ordinary ticket lists.

H7. Navigation should make the current location clear.

#### Later possibilities

Saved filters, personal views, advanced query builder, global search
across tickets and articles, keyboard shortcuts and configurable
dashboards.

---

### Module I --- Activity history and auditability

**Purpose:** Provide a trustworthy record of important actions,
especially where a change affects ownership, visibility or the state of
a ticket.

#### Functional requirements

I1. The system should record important ticket events.

I2. An activity entry should identify the actor, action and time.

I3. Relevant changes should identify the previous and new values where
appropriate.

I4. Authorised staff should be able to review a ticket's activity
history.

I5. Ordinary users must not be able to alter historical activity
records.

I6. Activity history must respect workspace and role permissions.

#### Examples of events

- Ticket created.
- Ticket assigned or reassigned.
- Status changed.
- Priority changed.
- Category changed.
- Public reply added.
- Internal note added.
- Ticket resolved or closed.
- Workspace member invited, activated or deactivated.

#### Later possibilities

Workspace-wide audit log, exportable audit records, retention policies,
administrative access history and compliance reporting.

---

## 7. Cross-cutting business rules

These rules apply across multiple modules. They are especially important
because a feature can appear to work in isolation while still violating
the product's overall rules.

### 7.1 Workspace isolation

- Every workspace-owned record belongs to one workspace.
- A user must have an appropriate membership and permission before
  accessing workspace information.
- A customer cannot access another customer's ticket merely by
  changing an identifier.
- A member of Workspace A must not gain access to Workspace B because
  they know a ticket reference or URL.
- Search, reports, notifications, attachments, articles and activity
  history must follow the same isolation rules.
- Workspace isolation must be enforced for every relevant operation,
  not just by hiding links in the interface.

### 7.2 Role-based access

- The interface should not offer actions a user is not allowed to
  perform.
- Hiding an action in the interface is not sufficient protection; the
  system must also reject unauthorised requests.
- Permissions should be checked whenever a user attempts to view or
  change protected information.
- A role change should affect the user's permissions according to the
  product's rules.
- Administrative privileges apply only within the relevant workspace.

### 7.3 Customer privacy

- Internal notes are private to authorised staff.
- Customer-facing responses must not contain private staff-only
  content.
- Personal information should only be visible to people who need it
  for their role.
- Notifications and reports must not accidentally disclose information
  to unauthorised recipients.
- The organisation should have a clear policy for retaining or
  deleting customer information.

### 7.4 Historical records

- Resolving or closing a ticket should not erase its conversation.
- Deactivating a user should not erase their historical actions.
- Reassignment should preserve the previous assignment history.
- Important changes should be attributable to a user or a clearly
  identified system action.
- The product should distinguish current ticket values from historical
  events.

### 7.5 Time and dates

- Ticket creation, replies and status changes should have timestamps.
- The product should handle users in different time zones
  consistently.
- Reports should clearly state which date range and time-zone
  interpretation they use.
- The user-facing display should be understandable and consistent.

### 7.6 Validation and error handling

- Required information must be checked before a record is accepted.
- Validation must occur at the system boundary, not only in the user
  interface.
- Error messages should explain what the user can do next without
  exposing internal technical details.
- A failed operation must not be presented as successful.
- Repeated submissions should be considered so that accidental
  double-clicks or network retries do not create confusing duplicate
  records where this can reasonably be prevented.

---

## 8. Non-functional requirements

Non-functional requirements describe the quality, constraints and
operating characteristics of ResolveDesk. They should be treated as
requirements that can be evaluated, not vague aspirations.

The targets below are **initial product targets**, not claims that the
application already meets them. Review and adjust them after research
and testing.

### 8.1 Performance

- Under normal operating conditions, the main user dashboard should
  become usable within approximately 3 seconds.
- Common user actions, such as opening a ticket or updating its
  status, should normally receive a response within approximately 2
  seconds, excluding unusually slow networks or external services.
- Large ticket lists must not require the application to retrieve and
  display every matching ticket at once.
- Search, filtering and reporting should remain usable as the volume
  of workspace data grows.
- The system should avoid unnecessary repeated loading that makes
  ordinary workflows feel slow.

**Why it matters:** slow interfaces make agents less productive and
frustrate customers. Loading every record at once may seem acceptable
with a few test records but becomes increasingly expensive as data
grows.

**If not achieved:** users may experience delays, timeouts and
unresponsive screens. The system may need better query design,
pagination, caching or other performance work. The exact remedy is an
engineering decision.

### 8.2 Security and privacy

- Passwords and authentication secrets must be handled securely and
  must never be stored or logged in plain text.
- Production communication must be protected in transit.
- Protected actions must require appropriate authentication and
  authorisation.
- Workspace isolation must be enforced for every relevant read and
  write operation.
- User input must be validated and handled safely.
- Private notes and sensitive customer information must not be exposed
  to unauthorised users.
- Secrets and private configuration must not be included in public
  source code.
- Security-relevant failures and administrative actions should be
  recorded appropriately without logging passwords, session secrets or
  unnecessary sensitive content.
- The product should be designed with common web application threats
  in mind, including injection, cross-site scripting, cross-site
  request forgery where relevant, broken access control and insecure
  file handling if uploads are introduced.

**Why it matters:** a support platform may contain names, contact
details, complaints, business information and potentially confidential
conversations. A cross-workspace data leak would be a serious product
failure.

**If not achieved:** users may access information they should not see,
accounts may be compromised, and organisations may lose trust in the
product.

### 8.3 Reliability and availability

- The application should handle unexpected errors without exposing
  internal implementation details to users.
- A failure in one request should not unnecessarily bring down
  unrelated user activity.
- Successfully saved tickets and messages should remain available
  after the user reloads or signs in again.
- The application should communicate clearly when a service is
  temporarily unavailable.
- Production data should be backed up according to a defined policy.
- A recovery procedure should exist and should be tested before the
  product is relied upon for important business operations.

**Initial availability target:** consider 99.5% monthly availability as
a future operational target, not an MVP guarantee. Availability
measurement must define what counts as downtime and how planned
maintenance is treated.

**Why it matters:** customers and agents need to trust that requests and
replies will not disappear.

**If not achieved:** users may lose work, fail to submit requests or be
unable to access support records when needed.

### 8.4 Scalability

- The product should support multiple independent workspaces.
- The product should be able to accommodate growth in users, tickets,
  messages and articles without changing its fundamental product
  model.
- Large lists and reports should be designed to handle increasing data
  volumes.
- A workspace's activity should not cause another workspace's data to
  become visible or incorrectly mixed with it.
- Growth should not require every user to share one overloaded view or
  process.

**Why it matters:** even if the first demonstration has only a few
users, the product's central promise is that multiple organisations can
use it independently.

**If not achieved:** performance and operating costs may deteriorate as
adoption grows, and the product may require significant redesign.

### 8.5 Usability

- The interface should be understandable to people who have not used
  ResolveDesk before.
- Common tasks should be easy to locate and complete.
- The interface should use consistent labels for statuses, priorities
  and actions.
- Destructive or consequential actions should be clearly communicated.
- Forms should explain validation errors close to the relevant field.
- Empty, loading, success and error states should be designed rather
  than left blank.
- The product should distinguish clearly between customer-facing
  replies and private internal notes.

**Why it matters:** users should spend their time solving customer
problems, not figuring out how the software works.

### 8.6 Accessibility

- Important actions should be usable with a keyboard.
- Form controls should have meaningful labels.
- Text and controls should have sufficient contrast.
- Information should not be communicated through colour alone.
- Focus should remain visible when navigating interactively.
- The interface should be usable with common assistive technologies to
  a reasonable and testable standard.

**Why it matters:** accessibility makes the product usable by a wider
range of people and improves the quality of the interface for everyone.

### 8.7 Compatibility and responsiveness

- The customer and staff interfaces should work on commonly used
  modern browsers.
- Core workflows should remain usable on desktop, tablet and mobile
  screen sizes.
- Layouts should adapt without hiding essential ticket information or
  actions.
- Unsupported browsers or environments should fail in a clear and
  understandable way.

**To decide:** the exact browser versions and device sizes to support.
These should be based on the intended audience and practical testing.

### 8.8 Maintainability

- The product should be organised so that features can be changed
  without unnecessarily affecting unrelated features.
- Business rules should be consistent across the application.
- Naming and terminology should be consistent.
- The project should document important product decisions and
  workflows.
- Important behaviour should be covered by repeatable tests.
- Configuration should be separated from application behaviour.
- The project should be understandable to another developer who reads
  its documentation.

**Why it matters:** ResolveDesk is intended to grow over time. A design
that is quick to build but difficult to understand or change will make
every later feature more expensive.

### 8.9 Data integrity and consistency

- Every ticket must have a valid requester and workspace.
- Every assignment must refer to an eligible member of the same
  workspace.
- Ticket status and priority must use valid values.
- Conversation entries must remain associated with the correct ticket.
- Important changes must not leave related records in contradictory
  states.
- Deactivation of a member must not erase historical attribution.
- The system must handle repeated or concurrent actions in a way that
  does not silently corrupt records.

**Why it matters:** reports and workflows are only trustworthy if the
underlying records are accurate.

### 8.10 Observability and supportability

- The product should provide enough operational information to
  investigate failures.
- Errors should be recorded in a way that helps diagnose the cause.
- Logs should avoid exposing credentials and unnecessary personal
  information.
- Administrators should be able to identify important ticket and
  membership events.
- Production issues should be distinguishable from ordinary user
  mistakes.

**Why it matters:** a system that fails without leaving useful
diagnostic information is difficult to maintain and support.

---

## 9. MVP scope and release priorities

The MVP should prove the central support workflow. It should not attempt
to deliver every feature in the product vision.

### 9.1 MVP: must-have capabilities

#### Foundation

- A customer-facing and staff-facing application with clear
  navigation.
- A working service through which the application can perform support
  operations.
- Persistent storage of users, workspaces, tickets and conversations.
- Clear handling of loading, empty, success and error states.

#### Accounts and permissions

- Account creation or a clearly defined customer onboarding process.
- Sign-in and sign-out.
- Customer, agent and administrator roles.
- Protected access to role-specific areas.
- Workspace membership and workspace isolation.
- Basic member management sufficient to create or manage the first
  support team.

#### Ticket workflow

- Customers can create tickets.
- Customers can view their own tickets.
- Agents can view permitted workspace tickets.
- Agents and administrators can view ticket details.
- Tickets have a unique reference, subject, description, requester,
  status and priority.
- Tickets can be assigned and reassigned by authorised users.
- Status and priority can be updated by authorised users.
- Agents can filter and search the ticket list using a small set of
  useful fields.

#### Conversations

- Customers can send replies.
- Agents can send public replies.
- Agents can add internal notes.
- Customers cannot view internal notes.
- Conversation entries show their author and time.

#### Quality and release

- Basic automated tests cover important business rules and access
  restrictions.
- The application is deployed to a publicly accessible environment.
- The project includes setup instructions and a clear description of
  its current limitations.
- A demonstration can show the customer, agent and administrator
  workflows.

### 9.2 What the MVP should demonstrate

A complete MVP demonstration should be able to show this sequence:

1.  An administrator accesses a workspace.
2.  The administrator makes an agent available to handle support
    requests.
3.  A customer accesses the customer area and submits a ticket.
4.  The ticket appears in the correct workspace's support queue.
5.  An agent opens the ticket and takes responsibility for it.
6.  The agent changes its status or priority.
7.  The agent sends a public reply.
8.  The customer sees the reply and responds.
9.  The agent adds an internal note, and the customer cannot see it.
10. The agent resolves the ticket.
11. The administrator can find the ticket and review its current state
    and history.
12. A user from a different workspace cannot access the ticket.

If this sequence works reliably and securely, the project has
demonstrated its central purpose.

### 9.3 Should be considered after the MVP

These features add significant value but are not required to prove the
core workflow:

- In-app notifications and unread notification counts.
- Knowledge-base articles and public article browsing.
- More detailed analytics and reporting.
- Ticket categories and configurable categories.
- Ticket attachments.
- Email notifications.
- Agent workload dashboards.
- Activity history beyond the basic ticket conversation.
- Customer satisfaction surveys.
- Saved ticket filters and views.

### 9.4 Long-term possibilities

These are potential product extensions, not promises that all will be
built:

- Real-time messaging and live updates.
- Automatic ticket assignment and routing.
- Service-level agreements (SLAs), deadlines and escalations.
- Multiple teams and departments within a workspace.
- Working hours, holidays and agent availability.
- Custom roles and granular permissions.
- Multiple communication channels such as email, live chat and social
  platforms.
- Customer portals with organisation-specific branding.
- Advanced knowledge-base search and article recommendations.
- Custom fields and configurable ticket workflows.
- Ticket merging, linking and duplicate detection.
- Canned responses and message templates.
- Customer satisfaction surveys and feedback analysis.
- Advanced analytics, report exports and scheduled reports.
- Integrations with external CRM, communication and project-management
  systems.
- Multiple languages and localisation.
- Mobile applications.
- Single sign-on and multi-factor authentication.
- Data retention controls and organisation-level compliance tools.
- AI-assisted classification, summarisation or suggested replies, with
  human review and clear privacy safeguards.

---

## 10. Detailed user journeys

These journeys describe how the product should feel and behave from the
user's perspective. They can later become implementation tasks and test
scenarios.

### 10.1 Customer submits a support request

**Goal:** The customer wants help with a problem.

1.  The customer enters the support area for the relevant organisation.
2.  The customer chooses to create a support request.
3.  The customer provides a subject and explains the issue.
4.  The customer supplies any other information the organisation
    requires.
5.  The customer submits the request.
6.  The system validates the information.
7.  If the information is valid, the system creates a ticket in the
    correct workspace.
8.  The system assigns a unique ticket reference and initial status.
9.  The customer sees confirmation that the request was submitted.
10. The customer can open the ticket and see its current state.

**If something goes wrong:** The customer should receive a clear error
message. The system must not claim that a ticket was created if it was
not saved successfully.

**Questions to decide:** Must a customer be signed in before submitting?
Can a customer attach files? Can a customer select a category or
priority? Which fields are mandatory?

### 10.2 Agent handles a new ticket

**Goal:** The agent wants to identify and handle a request.

1.  The agent signs in.
2.  The agent opens the ticket queue.
3.  The agent reviews tickets that need attention.
4.  The agent filters or searches if necessary.
5.  The agent opens a ticket.
6.  The agent reviews the request and conversation history.
7.  The agent assigns the ticket to themselves or another eligible
    agent, according to permissions.
8.  The agent changes the status to reflect the work being performed.
9.  The agent investigates and sends a public reply or adds an internal
    note.
10. The agent continues working until the issue is resolved or another
    action is needed.

**If something goes wrong:** The system should make it clear if the
ticket has been changed by another user or if the agent no longer has
permission to update it.

### 10.3 Agent needs more information

**Goal:** The agent cannot proceed without the customer's response.

1.  The agent opens the ticket.
2.  The agent sends a public message explaining what information is
    needed.
3.  The agent changes the ticket to Pending Customer.
4.  The customer receives or sees the reply.
5.  The customer provides the requested information.
6.  The ticket becomes visible for further support action.
7.  The agent continues handling it.

**To decide:** whether a customer reply automatically changes Pending
Customer to Open or In Progress, or whether an agent must make that
change.

### 10.4 Agent uses an internal note

**Goal:** The agent wants to communicate with colleagues privately.

1.  The agent opens a ticket.
2.  The agent chooses the internal-note action rather than the
    public-reply action.
3.  The agent writes the note.
4.  The system saves it as a private staff entry.
5.  Authorised staff can see the note in the conversation history.
6.  The customer cannot see the note.

The interface should make the distinction between a public reply and an
internal note unmistakable. Accidentally sending private information to
a customer is a serious failure.

### 10.5 Administrator manages an agent

**Goal:** The administrator wants to add a new support employee.

1.  The administrator opens workspace member management.
2.  The administrator chooses to invite a person.
3.  The administrator provides the required invitation details and role.
4.  The system associates the invitation with the correct workspace.
5.  The invitee completes the required onboarding process.
6.  The new member appears in the workspace member list.
7.  The administrator can assign eligible tickets to that agent.

**To decide:** invitation expiry, invitation cancellation, whether an
existing account can join another workspace and whether a user can hold
more than one role.

### 10.6 Administrator reviews support performance

**Goal:** The administrator wants to understand the team's current
workload.

1.  The administrator opens the analytics area.
2.  The system displays a summary for a clearly identified date range.
3.  The administrator reviews ticket counts by status and priority.
4.  The administrator reviews trends or agent workload where available.
5.  The administrator uses the information to identify bottlenecks or
    workload imbalances.

The dashboard should not imply that a metric is meaningful if there is
insufficient data. Definitions and date ranges should be visible.

---

## 11. Important edge cases and exceptional behaviour

A credible product specification considers what happens when things do
not follow the happy path.

### Accounts and membership

- A user attempts to access a workspace after being deactivated.
- An invitation is expired, invalid or already accepted.
- An administrator attempts to deactivate the only remaining workspace
  administrator.
- An agent is deactivated while tickets are still assigned to them.
- A user attempts to access a workspace they do not belong to.
- A user changes roles while signed in.

### Tickets

- A customer submits a ticket with missing or invalid information.
- A customer submits the same request twice.
- An agent opens a ticket that another agent has just updated.
- An administrator tries to assign a ticket to a person outside the
  workspace.
- A ticket has no assignee.
- A ticket is resolved while a customer reply arrives.
- A user tries to update a closed ticket.
- A ticket reference is guessed or altered by an unauthorised user.
- A search returns no results.
- A workspace has thousands of tickets.

### Conversations

- A message fails to save.
- A user submits the same message more than once.
- A customer attempts to create an internal note.
- A customer attempts to retrieve a private note through a direct
  request.
- A ticket is updated while another user is viewing it.
- A message contains unusually long text or unsupported content.

### Notifications

- The intended recipient is deactivated.
- A notification relates to a ticket the recipient can no longer
  access.
- The same event is processed more than once.
- A notification cannot be delivered through an external channel.
- A user has many unread notifications.

### Knowledge base

- An article is unpublished while a customer is viewing it.
- A customer attempts to access a draft article directly.
- An article is edited while another staff member is editing it.
- Search finds no relevant articles.

### Reports

- A workspace has no tickets in the selected period.
- A ticket changes status multiple times.
- A ticket is reopened after resolution.
- An agent is deactivated but has historical tickets.
- A report's date range crosses a month, year or time-zone boundary.

These cases should inform both the product rules and the tests. You do
not need to solve every advanced case in the MVP, but you should avoid
designing the initial system in a way that makes essential cases
impossible to handle later.

---

## 12. Data and information the product needs to manage

This section describes information from a product perspective. It does
not prescribe database tables, collections, schemas or relationships in
a particular technology.

### 12.1 User information

The product may need to know:

- The user's name.
- Their email address or other sign-in identifier.
- Their account status.
- Their role or workspace membership role.
- Their profile preferences.
- When their account was created and last updated.

Only collect information that has a clear product purpose.

### 12.2 Workspace information

The product may need to know:

- Workspace name.
- Workspace identity/reference.
- Workspace status.
- Workspace settings.
- Creation and update times.
- Its members and support configuration.

### 12.3 Ticket information

The product may need to know:

- Ticket reference.
- Subject and description.
- Requester.
- Workspace.
- Status and priority.
- Category.
- Assignee.
- Creation, update and resolution times.
- Conversation history.
- Relevant activity history.

### 12.4 Conversation information

The product may need to know:

- Which ticket the entry belongs to.
- Who wrote it.
- Its content.
- Whether it is public or internal.
- When it was created.
- Whether it has been edited, if editing is supported.

### 12.5 Notification information

The product may need to know:

- Which user should receive the notification.
- What event caused it.
- Which ticket or record it concerns.
- When it was created.
- Whether it has been read.
- Whether delivery through an external channel was successful, if such
  delivery is supported.

### 12.6 Knowledge-base information

The product may need to know:

- Article title and content.
- Category.
- Author or last editor.
- Publication status.
- Creation and update times.
- Whether it is public or staff-only.

### 12.7 Activity information

The product may need to know:

- Which user or system action performed an event.
- What action occurred.
- Which record was affected.
- When it happened.
- Relevant previous and new values.

---

## 13. Product quality and acceptance checklist

Use this checklist when reviewing a feature. A feature is not complete
merely because its main button works.

### General

- [ ] The feature has a clear user and purpose.
- [ ] The user can understand how to access it.
- [ ] Loading, success, empty and error states are considered.
- [ ] Invalid input is handled clearly.
- [ ] The feature works on supported screen sizes.
- [ ] The feature does not expose information to the wrong user.

### Permissions and workspace boundaries

- [ ] An unauthenticated user cannot access protected information.
- [ ] A customer cannot perform staff-only actions.
- [ ] An agent cannot perform administrator-only actions without
      permission.
- [ ] A user cannot access another workspace's records.
- [ ] Permission checks apply even if someone bypasses the normal
      interface.

### Data and history

- [ ] Successfully saved information remains available after reload.
- [ ] Related records remain associated correctly.
- [ ] Important changes are traceable where required.
- [ ] Deactivation does not accidentally destroy historical
      information.
- [ ] Dates and times are displayed consistently.

### Testing

- [ ] The normal successful workflow has been tested.
- [ ] Invalid input has been tested.
- [ ] Unauthorised access has been tested.
- [ ] Important edge cases have been tested.
- [ ] The feature has been checked alongside related features.

---

## 14. Suggested implementation order from a product perspective

This is a dependency-aware order of product work, not a prescription for
how to organise code or which technology to use.

### Stage 0 --- Product discovery and definition

Before implementing the main workflows:

- Understand the basic operation of customer support platforms.
- Identify the core users and their responsibilities.
- Decide the initial customer onboarding model.
- Define the first ticket statuses and their meanings.
- Define who can view, create and update each kind of information.
- Decide how workspace membership works.
- Write down the MVP boundaries.
- Sketch the main user journeys.

**Why first?** Unclear product rules create rework. For example, the way
customers access tickets affects account design, ticket visibility and
the customer experience.

### Stage 1 --- Workspace and identity foundation

Establish the concepts of users, workspaces, membership and roles.

The goal is to make sure that the product can distinguish users and
organisations before it stores sensitive ticket information.

**Completion outcome:** users can access the appropriate workspace and
cannot access areas outside their permissions.

### Stage 2 --- Core ticket workflow

Build ticket submission, ticket lists, ticket details, assignment,
status and priority changes.

**Completion outcome:** a customer can submit a request and an agent can
find and manage it.

### Stage 3 --- Conversations and privacy

Add public replies and internal notes, with clear visibility rules.

**Completion outcome:** customers and staff can communicate in one
ticket history without exposing internal notes.

### Stage 4 --- Team management

Add the ability to manage agents and workspace membership sufficiently
for a real team to use the product.

**Completion outcome:** an administrator can manage who is allowed to
work in the workspace and who can receive assignments.

### Stage 5 --- Quality and first usable release

Test the complete ticket lifecycle, role permissions, workspace
isolation, validation and error behaviour. Deploy a usable version and
document its limitations.

**Completion outcome:** the MVP can be demonstrated end to end, not
merely as disconnected screens.

### Stage 6 --- Notifications

Introduce notifications for important events and make unread state
meaningful.

**Completion outcome:** users can discover relevant changes without
manually checking every ticket.

### Stage 7 --- Knowledge base

Allow staff to create and publish help content and customers to browse
it.

**Completion outcome:** customers can find answers to common questions
without always opening a ticket.

### Stage 8 --- Analytics and reporting

Introduce clearly defined operational metrics and reporting periods.

**Completion outcome:** administrators can use reliable information to
understand support demand and performance.

### Stage 9 --- Advanced capabilities

Consider automation, service-level deadlines, integrations, real-time
updates, advanced permissions, exports and other extensions based on
what the product needs.

**Completion outcome:** ResolveDesk becomes more capable without
compromising the reliability of its core workflows.

---

## 15. Decisions the product owner must make

These are intentionally open. Research the options, consider the impact
on users and other features, then record your decision and reasoning.

---

Decision Questions to Why it matters
investigate

---

Customer onboarding Must customers register Affects identity,
first? Can they submit ticket access and
as guests? Can an account recovery.
organisation invite  
customers?

Workspace creation Who can create a Affects organisation
workspace? Can one user setup and membership.
belong to multiple  
workspaces?

Workspace ownership Is there one owner? Can Prevents organisations
ownership be from losing control.
transferred? Can the  
last administrator be  
removed?

Ticket visibility Can customers see only Defines privacy and
their own tickets? Can collaboration.
organisations have  
shared customer  
accounts?

Ticket assignment Can agents self-assign? Defines accountability
Can agents assign to and team workflow.
colleagues? Can more  
than one agent  
collaborate?

Status transitions Which status changes Defines the ticket
are allowed? Can lifecycle.
customers reopen  
tickets? When does a  
ticket close?

Priority control Can customers select Balances customer input
priority, or only and consistent triage.
staff?

Ticket categories Are categories fixed or Affects organisation
configurable by each and reporting.
workspace?

Internal notes Which roles can create Protects staff-only
and view them? Can they communication.
be edited or deleted?

Attachments Which file types and Introduces security,
sizes are allowed? Who storage and privacy
can access uploaded concerns.
files?

Notifications Which events matter? Affects usefulness and
Are notifications user expectations.
in-app, by email or  
both?

Knowledge base Is content public, Defines content access
workspace-specific or and governance.
staff-only? Who can  
publish?

Analytics Which metrics are Prevents misleading
meaningful? What are reports.
their exact definitions
and date ranges?

Data retention How long are tickets, Affects privacy and
messages and user operational
records retained? Can a obligations.
workspace request  
deletion?

Service expectations Does the organisation May introduce SLA
need response deadlines tracking and
or resolution targets? escalation.

Multiple channels Will requests arrive Affects ticket creation
only through the portal and conversation
initially, or also history.
through email/chat?
-----------------------------------------------------------------------

For each decision, keep a short record:

- **Decision:** What did you choose?
- **Reason:** Why is this suitable for the product?
- **Alternatives considered:** What else could have worked?
- **Consequences:** What becomes easier or harder because of this
  choice?
- **Revisit when:** What future condition might justify changing it?

This gives you control over the product's direction and makes your
reasoning part of the project.

---

## 16. Suggested research areas

The goal of research is not to copy another product's entire feature
set. It is to understand user expectations, common workflows, trade-offs
and problems that a support platform must handle.

Research these areas independently:

1.  **Customer support workflows:** ticket intake, triage, assignment,
    investigation, waiting for customer, resolution and closure.
2.  **Role and permission models:** customer, agent, administrator,
    workspace owner and team lead.
3.  **Multi-tenant products:** how organisations share one service while
    keeping their data separate.
4.  **Ticket lifecycle design:** status meanings, reopening, escalation
    and assignment rules.
5.  **Customer communication:** public replies, internal notes,
    attachments and conversation history.
6.  **Support operations:** queues, workload, service expectations and
    agent availability.
7.  **Support analytics:** response time, resolution time, backlog,
    ticket volume and customer satisfaction.
8.  **Knowledge management:** article creation, publishing, search and
    content maintenance.
9.  **Privacy and security:** access control, customer data, audit
    history, retention and secure file handling.
10. **Accessibility and usability:** forms, dashboards, navigation,
    responsive layouts and assistive technology.

When researching existing products, ask:

- What user problem does this feature solve?
- Who is allowed to use it?
- What information does it need?
- What happens when it fails?
- What could go wrong if it is implemented carelessly?
- Is it essential to the first release or only useful at scale?
- What simpler alternative could meet the same need?

---

## 17. Definition of MVP completion

ResolveDesk's MVP can be considered ready for an initial public
demonstration when all of the following are true:

1.  A workspace can have an administrator, agents and customers.
2.  Users can authenticate and access only the areas permitted to them.
3.  Workspace information is isolated.
4.  A customer can submit a support ticket.
5.  The customer can find and view their own ticket.
6.  An agent can find and open the ticket.
7.  An authorised user can assign or reassign it.
8.  An authorised user can change its status and priority.
9.  The customer and agent can exchange public messages.
10. An authorised agent can add an internal note.
11. The customer cannot view internal notes.
12. The ticket's important information remains available after reload
    and subsequent sign-in.
13. Invalid input and unauthorised actions are handled safely and
    clearly.
14. The main workflows have been tested.
15. The product is deployed and has setup/use documentation.
16. A reviewer can follow a documented demonstration using appropriate
    demo accounts.

A polished dashboard, advanced analytics or real-time updates cannot
compensate for broken workspace isolation or a ticket workflow that
loses customer messages. The core workflow and access rules take
priority.

---

## 18. Glossary

- **Authentication:** Establishing the identity of the person using
  the product.
- **Authorisation:** Determining what an authenticated person is
  allowed to do.
- **Workspace:** A separate organisation or support environment within
  ResolveDesk.
- **Multi-workspace / multi-tenant:** A product model in which
  multiple organisations use the same product while their information
  and access remain separated.
- **Ticket:** A tracked customer support request.
- **Requester:** The customer who submitted the ticket.
- **Assignee:** The person currently responsible for handling the
  ticket.
- **Public reply:** A message that the customer can see.
- **Internal note:** A private staff-only entry on a ticket.
- **Priority:** The level of urgency assigned to a ticket.
- **Status:** The current stage of a ticket's lifecycle.
- **SLA (service-level agreement):** A defined service expectation,
  such as a target for first response or resolution.
- **First response time:** The elapsed time from ticket creation to
  the first qualifying public response from support.
- **Resolution time:** The elapsed time from ticket creation to the
  point at which the ticket is marked resolved, according to the
  product's reporting rules.
- **Audit trail:** A record of important actions and changes.
- **MVP (minimum viable product):** The smallest coherent version that
  delivers the product's central value and can be used to validate it.

---

## 19. Living document and change policy

This specification is a starting baseline, not a document that must
remain unchanged forever.

As you research and build:

- Update a requirement when you learn that the original assumption was
  wrong.
- Record important decisions and their reasons.
- Do not add a feature merely because another support platform has it.
- Keep the MVP small enough to finish and test.
- Add later-release features only when the core product is stable.
- Make sure every new feature respects workspace isolation, role
  permissions and customer privacy.
- Update acceptance criteria when product behaviour changes.
- Keep the documentation aligned with what the application actually
  does.

**The central product principle:** ResolveDesk should make customer
support requests visible, accountable, traceable and easier to
resolve---without exposing one customer's or organisation's information
to someone who should not see it.
