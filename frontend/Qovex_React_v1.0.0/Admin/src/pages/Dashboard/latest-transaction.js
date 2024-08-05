import React from "react"
import { Card, CardBody, Table, CardTitle, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap"
import { Link } from "react-router-dom"

const LatestTransaction = () => {
    return (
        <Col lg={8}>
            <Card>
                <CardBody>
                    <CardTitle className="h4 mb-4">Complaints</CardTitle>
                    <div className="table-responsive">
                        <Table className="table-centered">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Id no.</th>
                                    <th scope="col">Issue</th>
                                    {/* <th scope="col">Amount</th> */}
                                    <th scope="col" colSpan="2">Complaint Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </Table>
                    </div>
                    <div className="mt-3">
                        <Pagination className="pagination pagination-rounded justify-content-center mb-0">
                            <PaginationItem>
                                <PaginationLink to="#">Previous</PaginationLink>
                            </PaginationItem>
                            <PaginationItem><PaginationLink to="#">1</PaginationLink></PaginationItem>
                            <PaginationItem className="active"><PaginationLink to="#">2</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink to="#">3</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink to="#">Next</PaginationLink></PaginationItem>
                        </Pagination>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default LatestTransaction