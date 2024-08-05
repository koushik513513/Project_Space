import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { isEmpty, map, size } from "lodash"
import { Link, withRouter } from "react-router-dom"
import classNames from "classnames"
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"
// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import ReactApexChart from "react-apexcharts"
import { getTasks } from "../../store/tasks/actions"
import { options, series, statusClasses } from "../../common/data/tasks"

const TasksList = props => {
  const { tasks, onGetTasks } = props

  useEffect(() => {
    onGetTasks()
  }, [onGetTasks])

  const recentTasks = tasks.find(task => task.title === "Recent Tasks")

  // Example data for complaints
  const complaints = [
    { id: 1, title: "Complaint 1", description: "Description of complaint 1" },
    { id: 2, title: "Complaint 2", description: "Description of complaint 2" },
    { id: 3, title: "Complaint 3", description: "Description of complaint 3" }
    // Add more complaints as needed
  ]

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Tasks" breadcrumbItem="New Complaints" />

        {/* Render cards for each complaint */}
        <Row>
          {complaints.map(complaint => (
            <Col lg={4} key={complaint.id}>
              <Card>
                <CardBody>
                  <CardTitle>{complaint.title}</CardTitle>
                  <p className="text-muted mb-0">{complaint.description}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </React.Fragment>
  )
}

TasksList.propTypes = {
  tasks: PropTypes.array,
  onGetTasks: PropTypes.func,
}

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.tasks,
})

const mapDispatchToProps = dispatch => ({
  onGetTasks: () => dispatch(getTasks()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TasksList))
