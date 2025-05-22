import { useNavigate, useParams, useSearchParams } from "react-router";
import { useGetGeneralWorkflowByIdQuery, useGetGeneralWorkflowsQuery } from "../api/GeneralWorkflowApi";
import { FaMinus } from "react-icons/fa";
import { ApprovalWorkflowNode } from "../DTOs/GeneralWorkflowDTO";

export default function GeneralWorkflowViewStepsPage() {
    const { id = '' } = useParams<{ id: string }>();

    const { data: generalWorkflow, isLoading, isFetching } = useGetGeneralWorkflowByIdQuery(id);
    const nodes: ApprovalWorkflowNode[] | undefined = generalWorkflow?.approvalNodes;

    const navigate = useNavigate();

    if(isLoading || isFetching){
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
            </div>
        );
    }

    return (
        <div className="p-6 space-y-4">
            <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Quy trình {id}</h2>
            <button
                className="btn btn-info flex items-center gap-2"
                onClick={() => navigate('/main/general-workflow/')}
            >
                <FaMinus /> Quay lại
            </button>
            </div>

            <div className="flex">
                <ul className="timeline timeline-vertical">
                    {nodes.map((node) => (
                        <li className="cursor-pointer" key={node.id}>
                            <div className="timeline-start timeline-box">{node.name}</div>
                            <div className="timeline-middle">
                                {node.approvalStatus == 'APPROVED' ? 
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="text-primary h-5 w-5">
                                        <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                        />
                                    </svg> :
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                        />
                                    </svg>
                                }
                            </div>
                            {node.approvalStatus == 'APPROVED' ? <hr className="bg-primary" /> : <hr />}
                        </li>
                    ))}
                </ul>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
            </div>
        </div>
    )
}