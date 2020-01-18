 
![angular](https://img.shields.io/badge/angular-^9.0.0--rc.7-lightgrey.svg?style=flat-square&logo=angular)  

# Stock Management - UI

The purpose of this Software Requirements Specification (SRS) document is to
provide a detailed description of functionalities of the ‘ Stock Management Software ’. This
document will cover each of the system’s intended features, as well as offer a preliminary
glimpse of the software application’s User Interface (UI). The document will also specify
software, and various other technical dependencies.
The purpose of this document is to put forward our proposal for design and
development of an Stock (goods) Management Software/Web Portal for manage stocks in
corporates, companies, institutions and many organisation. This document covers brief
project overview, features, technical and project management approach for the complete
project.



# Specification:
## 1. Login
Admins and Stock Manager can login from the login screen using email id and
secure password and this will be a first/landing screen of the “ Stock Management ” portal.
Password will be Alphanumeric & should be minimum 6 characters. Login authentication
will be check/verify from database and standard framework script/flow.
OR
If It will be based on another Employee Portal, than we will check this by API & we
will fetch records & check authentication according to API response.
Login Form will be contain following fields and links:
1. Enter Email Id (Text Field with Required & Email Validation)
2. Password (Text Field Required & Password Validation)
3. Submit (Submit Button)
4. Forgot Password - Link (Redirect to the forgot password screen)
If email and password will be verified than user will redirect to the Dashboard with
successful login flash message like Welcome Back & system will generate secure login
session with last login log entry into database & if we got any error from database/API
response than users will get error flash message with specific message like Password
incorrect, Email not exist on same login screen.
Note - Complete Software will be api based so Login is also api based, and we will
follow following conditions:
1. HR + Stock Applications - if client buy both applications than we will fetch
login information from HR Database by API and take action according to API
response.
2. HR Application - I f Client Take only HR Software than we will fetch login
information HR Database by API and take action according to API response.
3. Stock Application - If Client wants only Stock Applications.
a. If they have already HR applications - we will fetch login information
from Existing HR Software/Database (from another company) by API
and take action according to API response. But that another software
allow us to fetch records from API.
b. If they have not HR applications - we will setup HR Database with
stock applications and manage login and users records by API.

### 1.1. Manage Role
Super admin can manage role and permissions they can create Role and
provide permission according to there requirement basically we will provide
following roles by default, Currently there are not option to add edit delete etc for
Role but this will be managed in database.
Default Roles
1. Super Admin: Super admin can manage all modules, features and functions
for this software
2. Admin: Admin can manage all modules, and functions for this software but
Super admin can manage Role & Permission also.
3. Stock Manager: Stock Manager can manage stores, products, buy request,
assign product etc and they can see other store products and make request
for Take/Transfer Product to his/her store, like product transfer from one
store to another store.
4. Purchases Manager: this is responsible for buy products once stock store
manager make buy product request than admin will approve, so Purchases
manager will receive that approved buy product request with notification
after that he/she will collect quotation and buy product according to flow.
5. Audit Manager: Audit manager will audit a store & match real products to
listed products in software and make reports according to that. Once that
report will be approved by admin than they can able to adjust products
according to Audit reports.
6. Employee: Employee can request for require product and this request will
be goes to her/his manager/hod they will approve or reject.

## 2. Forgot Password
Admins and Store Manager can reset password if they forgot password. So they can
click on forgot password link which is on the Login Screen, once they click on link than they
will redirect to the forgot password screen.
Forgot Password Form will be contain following fields and links:
1. Enter Email Id (Text Field with Required & Email Validation)
2. Submit (Submit Button)
3. Login - Link (Redirect to the login screen)
If entered email is validate & verified/exist in HR database than system generate
reset password link with unique code and send email to registered email id and user will
get successful flash message like “ Thank You! System sent a email on your registered email
id to reset password” on same screen.
And If entered email is not validate & verified from database than user will get error
flash message like Email not exists in database on same screen.
OR
We can redirect to the forgot password page of another Employee Portal, where
users can make request for forgot password.

## 3. Dashboard
Admin and Store Manager will be redirect to the dashboard after successful login,
there they can see some stats like Products Check-in & Check-out, Min Products Alerts,
Notifications etc. also they can see modules list according to their rights like admin can see
and manage all modules, stores, products etc and store manager can see according to
assign store.
Dashboard will be in 3 sections as following
1. Header: This section will contain Logo left side, Notification, Profile, Logout
links in rights side.
2. Left: This section will contain all menus list.
3. Mid Section: This section will be open according to selected menu, like list,
forms etc

## 4. Edit Profile
Admins and Store Manager can edit his/her profile using by clicking on the Profile
Photo/Under this menu, which is on Header right side. Once they click on profile link they
will redirect to the profile edit page where they can see edit profile form.
Edit Profile Form will be contain following fields:
1. First Name (Text Field with Required & Validation)
2. Last Name (Text Field with Required & Validation)
3. Email (Text Field with Required & Email Validation)
4. Phone No. (Text Field with Required & Number Validation)
5. Address (Text Area with Required & Validation)
6. Country, State and City (Select with Required & Validation)
7. Zip Code (Text Field with Required & Number Validation)
8. Profile Photo (Browse Field with Not Required & Photo Validation like ext.
Size, Dimension)
9. Submit (Submit Button)
10. Cancel (Cancel Button)
That all things will be managed by HR database by API)
OR
If users records based on existing software/APIs than we will only show that records,
users will not able to edit any profile records from edit profile section.

## 5. Change Password
Admins and Store Manager can change password from changes password
section/page. Change Password link will be at Header right side near Profile Photo/Under
this menu.
Change Password Form will be contain following fields and links:
1. Old Password (Text Field Required & Password Validation)
2. New Password (Text Field Required & Password Validation)
3. Confirm Password (Text Field Required & Password Validation)
4. Submit (Submit Button)
5. Cancel (Cancel Button)
Users need to enter the old password is validate & verified from database And new
password, confirm password than submit to change his/her a/c password.
Password will be Alphanumeric & should be minimum 6 characters.
Once submit form it should be validate & if validate than user will be redirected to
the dashboard with successful flash message like “your password has been changed
successfully” and If not validate than user will get error flash message according to the
error on the same screen.
That all things will be managed by HR database by API)
OR
If it’s based on another Employee Portal/API, than we can change password using
API OR That link will not available on this portal.


## 6. Notification
Admin and Store Manager can see new & old notifications. Quick Notification icon
will be at Header right side with small red circle icon with notification counts, counts will be
based on unread notifications. Once they click on notification icon quick pull-down menu
will open with new/old notifications (like facebook).
Show All link will be at the bottom on this menu, users will redirect to the
Notification pages where they can see all notifications by clicking on it.


## 7. Manage Employee
Admins can manage all Employees in the organization with employee types, and as
per API based application we will manage all employees records by API. fetch, search, add,
edit, delete etc all things by API from HR Database (our company's hr applications)
If That is from another HR applications we will only show records in list view and
and admins and stock manager can search employee records.
And Also they can see allocated items/products (as per process) to particular
employee and provide NOC from there.
We Can Manage Employee Data According to HR Software
NOC - No Objection Certificate - Store manager can see assigned product to
employee and if employee left company than store manager can see products which is
assigned to this employee and check & take all products from employee and make stock
check in entry in software and provide NOC-Certificate/Report to employee.

## 8. Manage Categories
Admins & Store Manager can manage categories of products. They can add, edit,
delete and change status for any products categories.
Manage Categories have following fields:
1. Category Name (Text Field with Required & Validation)
2. Parent Category (Select Box - if not than by default it will be main category
OR it’s child one than we need to select main category)
3. HSN Code (Text Field with Required & Validation) - Required to Discuss
with Accountant
4. GST Rate (%) (Text Field with Required & Number Validation)
5. Description (Text Area and No Validation)
6. Submit (Submit Button)
7. Cancel (Cancel Button)
4.8.1 Manage Sub Categories
Admins & Store Manager can manage Sub categories of products unders
Main Category, they can add, edit, delete & change status for any sub categories.
Also we will make this module as Recursive Module , so we can add more
sub-categories under sub-category, for now we will make 2-3 levels of categories
according to R&D on products.

## 9. Manage Company/Brand
Admins & Store Manager can manage company and brand name for products, they
can add, edit, delete and manage status for those brands/company, it will not much
related to other operations, but we will take this as a reference. So store manager can
select brand/company name at the time of add/edit products.
Manage Company / Brand have only text field which is ‘Company/Brand Name’ and
In the product add/edit form that field will be autofill and auto added.
Or we can see product according to brand filter.
Manage Company/Brand have following fields:
1. Company/Brand Name(Text Field with Required & Validation)
2. Submit (Submit Button)
3. Cancel (Cancel Button)

## 10. Manage Unit
Admin & Store Manager can manage Units for products. Like Kilogram, Litter,
No./Unit, Dozen etc according to need / products.
Manage Unit have following fields:
1. Unit Title (Text Field with Required & Validation)
2. Submit (Submit Button)
3. Cancel (Cancel Button)

## 11. Manage Stores
Super Admin & Admin can manage stores, they can add, edit, delete multiple stores
in a single organization. Those stores are based on multiple locations, so we will manage
stores by unique store no. , One Store manager can manage multiple stores and only admin
and super admin can assign store manager to stores.
Manage Stores have following fields:
1. Store Name (Text Field with Required & Validation)
2. Store Type (Radio public/private)
3. Unique No. (Auto Generate)
4. Floor No. (Number Field with No Required)
5. Address (Text Area with Required & Validation)
6. Country, State and City (Select with Required & Validation)
7. Zip Code (Text Field with Required & Number Validation)
8. Phone No/Ext. No
9. Submit (Submit Button)
10. Cancel (Cancel Button)
Super Admin, Admin & Store manager can view store wise products & stock.
*Repair, Maintenance Department will be a store
*if Store is Private and employee will not able to see that stores and products.
Only Admins/Manager can view and make request.

## 12. Manage Employees
Admin/Super admin & Store Manager can manage employees. They can
add/edit/delete manage status as following:
1. They can import/export from another software.
2. We will fetch from another software by API Or from our software.
3. If fetch from another software than they can only view records.
4. And if from our software than they can add/edit by API.
Manage Employee have following fields:
1. First Name (Text Field with Required & Validation)
2. Last Name (Text Field with Required & Validation)
3. Email (Text Field with Required & Email Validation)
4. Mobile/Phone No. (Text Field with Required & Number Validation)
5. Department (Select Box with Required & Validation)
6. Designation (Select Box with Required & Validation)
7. Address (Text Area with Required & Validation)
8. Country, State and City (Select with Required & Validation)
9. Zip Code (Text Field with Required & Number Validation)
10. Submit (Submit Button)
11. Cancel (Cancel Button)

## 13. Manage Managers/ Role (Store Manager etc)
Super Admin & Admin can manage managers & Store Manager’s records/data will
be come from HR Software and Another software according to setup as previous described.
So Super admin and admin can view all managers and they can assign multiple stores to a
single manager.
They can view assigned stores and also they can store manager from store.
Admins - can assign roles to employees like Store Manager, Purchases manager, Audit
Manager etc.
## 14. Manage Vendors
Admins and Store/Purchases Manager can manage vendors. They can add/edit/
delete manage status etc And also they mark as Favorite Vendors and we will create a Algo
for manage Favorite Vendors according to service they provide, like delivery time,
payment system product quality etc.
Manage Vendor have following fields:
1. Company/Shop Name (Text Field with Required & Validation)
2. Email (Text Field with Required & Email Validation)
3. Phone No. (Text Field with Required & Number Validation)
4. Categories (Multi - Select Box)
5. Vendor Type (Select Box - New Product, Product On Rent, Both)
6. GST No (Text Field with Required & Validation)
7. A/c No. (Text Field with Required & Validation)
8. Bank Name and Details (Text Field with Required & Validation)
9. IFSC Cad (Text Field with Required & Validation)
10. Payment Conditions (Select - Advance, Half Advance or % of Advance, After
Delivery)
11. Delivery Durations (Days Text box or immediately/same day)
12. Address (Text Area with Required & Validation)
13. Country, State and City (Select with Required & Validation)
14. Zip Code (Text Field with Required & Number Validation)
15. Contact Person Name (Text Field with Required & Validation)
16. Contact Person Mobile no. (Text Field with Required & Number Validation)
17. Submit (Submit Button)
18. Cancel (Cancel Button)

## 15. Manage Products
Super Admin/Admin & Store manager can manage Products, So Super admin/admin
& Store manager can view all products and search & sort according to product name,
brand, categories, vendors and Qyt etc. they can add, edit, delete products and manage
status (active/deactive). Also they can see & get following things in list view for take instant
actions according to need.
1. Less Product Qyt alert also Admins and Store manager will get notification.
2. Assign Product to Employees (list of employees & store manager with qyt and
date of assign)
3. Instant Generate Request for this product.
4. Monthly AVG. usages.
5. Store wise Qyt list.
6. Stock Qyt (In Store | Assigned | Dead of Total Qyt) This is also view store wise
7. Product On Rent wish display

Add Products have following fields:
1. Product Unique Code (Auto generate and we will use for make QR/Barcode)
2. Product Name (Text Field with Required & Validation)
3. Product Categories (Select box categories with Required & Validation)
4. Product Sub Categories (Select box categories with Required & Validation)
5. Brand Name (Text Field, Autofill and Auto Add with Required & Validation)
6. Vendors (supplier) (Multi Select With Required & Validation)
7. Opening Balance/Qyt (Text Field with Required & Validation)
8. Unit (Select box with Required & Validation)
9. Product Type (Radio, Consumable Or Non-Consumable)
10. Product Reference No (Radio, Yes Or No)
11. Conditions ( Select box New/Old/Dead)
12. Product Price (Text Field with Required & Validation)
13. Product Rent Price Price (Text Field with Required & Validation)
14. Product Image (Optional)
15. Color (Optional)
16. Product Description (Optional)
17. Submit (Submit Button)
18. Cancel (Cancel Button)
*R&D On Products Fields like We have 10 Gas Calendar and 5 is empty and
5 if full/semi full so make some fields according to this
Import and Export products we will provide a feature for import product into our
system/software. We they can download sample xls file & fill products according to sample
data or help section like (Categories id/Name, Brand Name, Unit etc etc which is Id based).
Also admins and store manager can download xls for products according to filter or
date range.
## 16. Request Generation
Admins can manage all Request Generation Process take action according to that.
Store manager can Generate Vendors wise Request for buy new stock & Product on Rent
with Unique request no. as following:
Request Generation have following fields:
1. Product Categories (Select box with Required & Validation)
2. Product Name (Text Field with Required & Validation)
3. Brand (Select Box with Required & Validation)
4. Require Qyt. (Text Field with Required & Validation)
5. Select Unit (Select Box - like Kg, Unit No, Tan, etc - SA, A & SM manage unit)
6. Estimation (Only For Show & Automatic Calculate)
7. Vendor’s Payment & delivery Conditions (Auto Fill For Showing)
8. Description (Text Area with Required & Validation)
9. Add More Rows & Remove Rows
10. Submit (Submit Button)
11. Cancel (Cancel Button)
Once store manager submit request admin/super admin will receive notification
and they can see all requests with status new, old, updated, rejected in list view etc & they
can see/view request in details like vendor’s, products, payment’s, delivery details and old
stock status (like qyt, price etc) with Store and Store manager’s details (who submitted)
and take the following actions:
1. Approve - Admin and Super Admin can view and if all looks fine than
admin/super admin can approve according to requirement and Also they
can edit qyt, or remove some items from generated request and approve
with submit note/description. Store manager will receive notification and
also Purchases manager will be receive notification for approved Request.
2. Edit Request - Admin and super admin can view request and they can just
leave note/description and submit for edit and submit again. Store manager
will get notification and edit that request according to admin/super admin
notes and resubmit. Admin will get again notification and see re-submitted
request with his sumibted note and take required action.
3. Reject - Admin and super admin can view request and reject request, store
manager/super admin will get a notification.

## 17. Manage Quotations
Admin/Super Admin, Store Manager & Purchase manager can view all approved
requests in Approved Request Section. Purchase manager can mail with approved request
products details to vendors by clicking send mail icon also they can send mail to other
vendors (similar categories) by system OR they can download request in xls/pdf and send
offline/manually.
They can contact to vendors for send quotation with payment & delivery details.

### 17.1 Review Quotations & Take Action
Once purchases manager get quotations, they will upload that Quotations
with selected/particular approved request. Admin/Super Admin will receive
notification and approve one quotation. Once approved purchases manager can
Generate P.O (Purchase Order) for Buy products according to approved quotation.

## 18 P.O. Generations
Purchases Manager can generate P.O for approved Quotation, when they click on
generate P.O (this button will action in Approved quotation list after approved quotation
by admin/super admin). When Purchases Manager click on this button/icon a new window
will open for generate P.O. for approved vendor with products details, they can put some
message and generate P.O once they generated/submitted, admin/super admin will get
notification and also they can receive mail with generated P.O. and also Vendor will get
generated P.O by mail on his/her mail id. Or purchases manager can download P.O xls/pdf
and send offline/manually.
Once product receive from vendors Purchases manager will be handover products
to Store manager.

## 19. Stock Check-In and Check-Out
Store manager and Admins can manage stock in store once they received products
from vendors or buy new stocks in organization than they require to add those products in
this portal/software from stock check in section OR if any one take stock from store room
than they require to assign / less projects from stock check out section.

### 19.1. Stock Check-In
Store manager and Admins can add more stock from Stock Check-In
Section. Once the received stocks from vendor, they will add stock unders approved
Request / Quotation, they will click on button Check-In (this button will available for
approved Quotation/Request list) a new window will be open with pre-field
products details according to P.O and with store details and Store manager can edit
qyt etc (if products are less or not fine etc) and Submit/Add products. And they can
upload bill with this request for uploaded products. Admin/Super admin will receive
notifications and this request will be completed.
And Store manager check in product from another store as per process, so
they can select option like New Products OR Transfer From another Store, and From
Employee, if they select Transferred from another Store they will select Store
details like name etc and than check in products OR if the select From Employee
they will select employee details & than check in products.
Dead Stock Check-in - During time on check this store manager can select
stock is workable or dead.
### 19.2. Stock Check-Out
Store manager and Admins can take stock from store(s) from Stock
Check-out Section. They will take products from store and make a Stock Check Out
Entry into system as following.
OR-Code Based - Store manager will scan QR code, add Qyt, Reference No.
and they can scan multiple products as same time and assigned to a one
person/employee (as per request). For this we require to create Mobile
Application.
OR
Entry Based - Store manager will make entry for Check out process they
require to select products, add qyt, Reference No. and assigned to a one
person/employee (as per request) also this entry will take assign date and time and
entry note use of purpose (tex area).
Reference No. This is just a field where Store Manager will put sticker for
Reference no on Product, this field required if Product Reference No. field is True
else not.
Once they assign and submit Admins and employee will get notifications.
Process
1. Employees: All Employees can make product request like Make
Request/Select product, qyt (product details) and make a Product
Request from HR portal, his/her manager will get notification and if
they approve this request than store manager and admin will get
notification, that employee will go to the store and take product
from store manager with unique request no. store manager will see
all request in a page where they can go direct from
Dashboard/Menu.
We will make this product request process also on our software as per
RND
2. Store Manager: A store manager can see all products from another
stores, also they can search product by name check this product
availability with store details & qyt.
a. Make Request Store manager will make request (like above)
like Add/Select products, details, select qyt, select store. One
they submit admins will get notification, admin can approve,
reject by note. Once admin reject this request will be closed
and if Approved by admins than Both store manager will get
(Selected Store’s Manager) notification and they will provide
stock as per request. And Store manager (make request) will
check in that products

## 20. Audit Manage
Audit Manager can manage Audit, he is responsible to match Real Stock to System
store, Admins will make Audit Manager and assign stores to audit manager. He will be
responsible to make audit and make audit reports and submit to Admin. And they can
adjust stock after approval/confirm from admins.
Assign Assign
1. Select Audit Manager (Select Box, Required & Validation)
2. Select Stores (Select Box, Required & Validation)
3. Audit Date (Date Picker, Required & Validate - Can select only next date)
4. Submit
5. Cancel
Once Admin Assign Audit to a Audit Manager Audit manager & Admins will receive
notification. And Store manager will receive notification on Audit date/before a date (as
per script we can change days from setting).
Assigned Audit will be shown in Audit Section in Grid view also they can view details
page. Admins can add/edit/delete audit as per requirement. And Audit Manager will do
audit, they can download reports as per system stocks of this store with Product Name,
Categories, qyt (?/Total, ?/Dead, ?/In Stock, ?/Assigned Stock), Audit manager also check
Assigned Stock, Dead Stock, Stock check in/out reports etc and match real stock and make
reports according to audit with Stock Manager Note and Audit Manager Note with Sign,
and Complete Audit with upload this report and make system entry as per audit and
submit this reports.
Once Submit report Admins and Store manager will get notification and admin can
review, do meet and approve with note) once approved by admin Store manager, Audit
Manager and Admins will be notification. And Adjust System Product Qyt according to
Audit Reports which is approved by Admin.

## 21. Product Rent
Admins & Store Manager can manage products of rent according to need in their
organization. They can take product on Rent form vendors and also they can provide
products on rent to customers as following:

### 21.1. Manager Customers
Admins & Store Manager can manage customers, who take product on rent.
Also they can see provide product list and log from select of Customers.
Manage Customers have following fields:
1. Company/Shop Name (Text Field with Required & Validation)
2. Email (Text Field with Required & Email Validation)
3. Phone No. (Text Field with Required & Number Validation)
4. GST No (Text Field with Required & Validation)
5. Payment Conditions (Select - Advance, Half Advance or % of Advance, After)
6. Address (Text Area with Required & Validation)
7. Country, State and City (Select with Required & Validation)
8. Zip Code (Text Field with Required & Number Validation)
9. Contact Person Name (Text Field with Required & Validation)
10. Contact Person Mobile no. (Text Field with Required & Number Validation)
11. Submit (Submit Button)
12. Cancel (Cancel Button)

### 21.2. Give On Rent
Admins & Store manager can provide products on rent to customers, Store
manager will make entry like select customers, select products with qty and price
(calculated from product table) date and return date, payment conditions etc. once submit
admins will get notification, once admin approve Store Manager and Customer will get
notification and if admin rejected then Store manger will get notification. Also admin can
edit this and approve. Once approved store manager can provide stock as per approved
request to customers and at the time of deliver store manager will download product
receipt and take customers sign and provide a copy to customer also customer will get
email notification with all details. Store manager will upload this signed copy with this
request and make payment entry if received some.
Admins, Customers and Store manager will get notification on delivery date
Or before a day. Return Stock Store manager will check all stocks and verify if stock is not
ok/broken/dead than he will make a receipt for payment with select product and take
payment from customers & make entry with this track. And make entry for a dead stock.
Or if they receive stock after n days than store manager will edit entry update return date
and download and take payment according to update receipt, and admins will get
notifications.

### 21.3. Take On Rent
Admins and Store manager can take product from vendors on rent, they will
make an entry in system for require products , they will select vendors (Rent), select
products with categories, qyt, price (add more) etc date From-To, Note and submit, once
submitted by store manager admins will get notification on admin will review and approve
or reject, once approved store manager and vendor will get notification and store manager
will take product from vendors and product check in entry. On Return date Store manager
will make checkout entry and delivery product to vendors and take sign from vendors,
make payment and make payment entry and bill with this track, and Admins will get
notifications.

## 22. Reports
Admins & Store manager can view and download products reports according to
employee, vendor, categories, stores, managers, date filters, date range, year wish etc
according to need and run time R&D. we will make approx 10 Reports in this phase.

### 22.1. Stock Take by and Reports
Admins and Store Manager can manage view Take by Reports. Under this report
they can see assigned product to employee with date, qyt, purpose etc.

## 23. Manage Location
Admins & Store Manager can manage Locations like country, state, cites, they can
add, edit, delete and manage status. We can import locations database.

### 23.1. Manage Country
Admin & Super Admin can manage Country.
Country Name (Text Field with Required & Validation) with code (Text Field
with Required & Validation) etc.

### 23.2. Manage State
Admin & Super Admin can manage States under Country.
State Name (Text Field with Required & Validation) with Country (Select
box with Required & Validation) etc.

### 23.3 Manage City
Admin & Super Admin can manage City under State.
City Name (Text Field with Required & Validation) with State (Select box
with Required & Validation) etc.

## 24. Settings
Admins Can manage software settings according to organization and requirements
and the Setting will be based on organization like:

### 24.1. General Setting
1. Organization/Company Name
2. Logo
3. Email
4. Min. Product Alert
5. SMS Notification
Etc we will add according to development and requirement

### 24.2. Email Setting
Admins can change predefined email contents. That all email content will be
stored in database with keywords, admin can view all email in list view with edit icon so
admin can change only general content but not able to remove fixed content for emails
and also they are not able to delete or add new email content for software/portal.
## 25 Support & Help
Admins and managers can raise query, problem etc to software company who build
this software. They can fill following fields like:
1. Query Type: Bug/Problem OR Support
2. Priority: High, Medium or Low
3. Description
4. Upload screenshot
5. Theme Color
6. Submit
7. Cancel
Software Company will get mail once they submit query and Customer will get mail
notification also with query details and thank you message.
Also we will provide a link for Download Help PDF file and we will put “How to Use”
Process and Modules help details in this document.
Also we will put Help Desk Phone No, Company Details in this section.
