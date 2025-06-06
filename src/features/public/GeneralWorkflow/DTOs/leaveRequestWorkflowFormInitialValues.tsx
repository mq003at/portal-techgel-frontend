import { CreateLeaveRequestWorkflowDTO } from "./LeaveRequestWorkflowDTO";


export const leaveRequestWorkflowFormInitialValues = (employeeId: number) : CreateLeaveRequestWorkflowDTO => ({
    employeeId: employeeId,
    reason: "",
    startDate: "",
    endDate: "",
    leaveRequestNodes: [],
    name: "",
    status: "PENDING",
    receiverIds: [],
    draftedByIds: [],
    senderId: employeeId,
    mainId: ""
})