-- ================================================
-- Create Database
-- ================================================
CREATE DATABASE ServiceRequestDB;
GO

USE ServiceRequestDB;
GO

-- ================================================
-- Master Tables
-- ================================================

-- ServiceRequestStatus
CREATE TABLE ServiceRequestStatus (
    ServiceRequestStatusID INT PRIMARY KEY,
    ServiceRequestStatusName VARCHAR(250) NOT NULL,
    ServiceRequestStatusSystemName VARCHAR(100) NOT NULL,
    Sequence DECIMAL(10,2) NULL,
    Description VARCHAR(250) NULL,
    UserID INT NOT NULL,
    Created DATETIME NOT NULL,
    Modified DATETIME NOT NULL,
    ServiceRequestStatusCssClass VARCHAR(250) NULL,
    IsOpen BIT NULL,
    IsNoFurtherActionRequired BIT NULL,
    IsAllowedForTechnician BIT NULL
);

-- ServiceDept
CREATE TABLE ServiceDept (
    ServiceDeptID INT PRIMARY KEY,
    ServiceDeptName VARCHAR(250) NOT NULL,
    CampusID INT NOT NULL,
    Description VARCHAR(250) NULL,
    UserID INT NOT NULL,
    Created DATETIME NOT NULL,
    Modified DATETIME NOT NULL,
    CCEmailToCSV VARCHAR(250) NULL,
    IsRequestTitleDisable BIT NULL
);

-- ServiceDeptPerson
CREATE TABLE ServiceDeptPerson (
    ServiceDeptPersonID INT PRIMARY KEY,
    ServiceDeptID INT NOT NULL,
    StaffID INT NOT NULL,
    FromDate DATETIME NOT NULL,
    ToDate DATETIME NULL,
    Description VARCHAR(250) NULL,
    UserID INT NOT NULL,
    Created DATETIME NOT NULL,
    Modified DATETIME NOT NULL,
    IsHODStaff BIT NULL,
    FOREIGN KEY (ServiceDeptID) REFERENCES ServiceDept(ServiceDeptID)
);

-- ServiceType
CREATE TABLE ServiceType (
    ServiceTypeID INT PRIMARY KEY,
    ServiceTypeName VARCHAR(250) NOT NULL,
    Description VARCHAR(250) NULL,
    Sequence DECIMAL(10,2) NULL,
    UserID INT NOT NULL,
    Created DATETIME NOT NULL,
    Modified DATETIME NOT NULL,
    IsForStaff BIT NULL,
    IsForStudent BIT NULL
);

-- ServiceRequestType
CREATE TABLE ServiceRequestType (
    ServiceRequestTypeID INT PRIMARY KEY,
    ServiceTypeID INT NOT NULL,
    ServiceDeptID INT NOT NULL,
    ServiceRequestTypeName VARCHAR(250) NOT NULL,
    Description VARCHAR(250) NULL,
    Sequence DECIMAL(10,2) NULL,
    UserID INT NOT NULL,
    Created DATETIME NOT NULL,
    Modified DATETIME NOT NULL,
    RequestTotal INT NOT NULL,
    RequestPending INT NOT NULL,
    RequestClosed INT NOT NULL,
    RequestCancelled INT NOT NULL,
    IsVisibleResource BIT NULL,
    DefaultPriorityLevel VARCHAR(50) NULL,
    ReminderDaysAfterAssignment INT NULL,
    IsMandatoryResource BIT NULL,
    FOREIGN KEY (ServiceTypeID) REFERENCES ServiceType(ServiceTypeID),
    FOREIGN KEY (ServiceDeptID) REFERENCES ServiceDept(ServiceDeptID)
);

-- ServiceRequestTypeWisePerson
CREATE TABLE ServiceRequestTypeWisePerson (
    ServiceRequestTypeWisePersonID INT PRIMARY KEY,
    ServiceRequestTypeID INT NOT NULL,
    StaffID INT NOT NULL,
    FromDate DATETIME NOT NULL,
    ToDate DATETIME NULL,
    Description VARCHAR(250) NULL,
    UserID INT NOT NULL,
    Created DATETIME NOT NULL,
    Modified DATETIME NOT NULL,
    FOREIGN KEY (ServiceRequestTypeID) REFERENCES ServiceRequestType(ServiceRequestTypeID)
);

-- ================================================
-- Routine Tables
-- ================================================

-- ServiceRequest
CREATE TABLE ServiceRequest (
    ServiceRequestID INT PRIMARY KEY,
    ServiceRequestNo VARCHAR(500) NOT NULL,
    ServiceRequestDateTime DATETIME NOT NULL,
    StaffID INT NULL,
    ServiceRequestTypeID INT NOT NULL,
    ServiceRequestTitle VARCHAR(250) NOT NULL,
    ServiceRequestDescription VARCHAR(2000) NOT NULL,
    AttachmentPath VARCHAR(250) NULL,
    ServiceRequestStatusID INT NOT NULL,
    ServiceRequestStatusDateTime DATETIME NULL,
    ServiceRequestStatusByUserID INT NULL,
    ServiceRequestStatusDescription VARCHAR(500) NULL,
    ApprovalStatus VARCHAR(50) NULL,
    ApprovalStatusDateTime DATETIME NULL,
    ApprovalStatusByUserID INT NULL,
    ApprovalStatusDescription VARCHAR(250) NULL,
    AssignedToUserID INT NULL,
    AssignedDateTime DATETIME NULL,
    AssignedByUserID INT NULL,
    AssignedDescription VARCHAR(250) NULL,
    Description VARCHAR(2000) NULL,
    UserID INT NOT NULL,
    Created DATETIME NOT NULL,
    Modified DATETIME NOT NULL,
    AttachmentFileOriginalName VARCHAR(250) NULL,
    ResourceID INT NULL,
    PriorityLevel VARCHAR(50) NULL,
    OnBehalfOfStaffID INT NULL,
    StudentID INT NULL,
    AttachmentPath2 VARCHAR(250) NULL,
    AttachmentPath3 VARCHAR(250) NULL,
    AttachmentPath4 VARCHAR(250) NULL,
    AttachmentPath5 VARCHAR(250) NULL,
    FOREIGN KEY (ServiceRequestStatusID) REFERENCES ServiceRequestStatus(ServiceRequestStatusID),
    FOREIGN KEY (ServiceRequestTypeID) REFERENCES ServiceRequestType(ServiceRequestTypeID)
);

-- ServiceRequestReply
CREATE TABLE ServiceRequestReply (
    ServiceRequestReplyID INT PRIMARY KEY,
    ServiceRequestID INT NOT NULL,
    StaffID INT NULL,
    ServiceRequestReplyDateTime DATETIME NOT NULL,
    ServiceRequestReplyDescription VARCHAR(250) NOT NULL,
    AttachmentPath VARCHAR(250) NULL,
    ServiceRequestStatusID INT NOT NULL,
    ServiceRequestStatusDateTime DATETIME NOT NULL,
    ServiceRequestStatusByUserID INT NOT NULL,
    ServiceRequestStatusDescription VARCHAR(250) NULL,
    Description VARCHAR(250) NULL,
    UserID INT NOT NULL,
    Created DATETIME NOT NULL,
    Modified DATETIME NOT NULL,
    AttachmentFileOriginalName VARCHAR(250) NULL,
    ServiceRequestTypeID INT NULL,
    StudentID INT NULL,
    FOREIGN KEY (ServiceRequestID) REFERENCES ServiceRequest(ServiceRequestID),
    FOREIGN KEY (ServiceRequestStatusID) REFERENCES ServiceRequestStatus(ServiceRequestStatusID)
);
