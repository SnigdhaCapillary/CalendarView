import React, { Component } from 'react';
import Scheduler, { SchedulerData, ViewTypes, DATE_FORMAT } from 'react-big-scheduler';
import withDragDropContext from './withDnDContext';
import 'react-big-scheduler/lib/css/style.css';
import moment from 'moment';
import './Style.css';

let resources = [
    {
        id: 'r0',
        name: 'R0',
        groupOnly: true
    },
    {
        id: 'r1',
        name: 'R1'
    },
    {
        id: 'r2',
        name: 'R2',
        parentId: 'r0'
    },
    {
        id: 'r3',
        name: 'R3',
        parentId: 'r4'
    },
    {
        id: 'r4',
        name: 'R4',
        parentId: 'r4'
    },
    {
        id: 'r5',
        name: 'R5',
        parentId: 'r5'
    },
    {
        id: 'r6',
        name: 'R6',
        parentId: 'r6'
    },
    {
        id: 'r7',
        name: 'R7',
        parentId: 'r7'
    },
];
let events = [
    {
        id: 1,
        start: '2022-01-02 09:30:00',
        end: '2022-03-20 23:30:00',
        resourceId: 'r1',
        resizable: false,
        title: 'New Year Extended Promo',
        bgColor: '#feedc0',
        textColor: 'black',
        startResizable: false,
        endResizable: false,
        movable: false,
    },
    {
        id: 2,
        start: '2022-01-05 12:30:00',
        end: '2022-03-18 23:30:00',
        resourceId: 'r2',
        title: 'Pongal Sale',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },
    {
        id: 3,
        start: '2022-01-05 12:30:00',
        end: '2022-03-01 23:30:00',
        resourceId: 'r2',
        title: 'Republic Day sale',
        movable: false,
        bgColor: '#c7e7c7',
        startResizable: false,
        endResizable: false,
        resizable: false,
    },
    {
        id: 4,
        start: '2022-02-01 14:30:00',
        end: '2022-02-20 23:30:00',
        resourceId: 'r1',
        title: 'Valentine Season',
        startResizable: false,
        endResizable: false,
        bgColor: '#e9e9ea',
        resizable: false,
    },
    {
        id: 5,
        start: '2022-05-20 15:30:00',
        end: '2022-06-01 23:30:00',
        resourceId: 'r2',
        title: 'Black Friday Sale',
        bgColor: '#feedc0',
        resizable: false,
        startResizable: false,
        endResizable: false,
    },
    {
        id: 6,
        start: '2022-02-01 14:30:00',
        end: '2022-02-28 23:30:00',
        resourceId: 'r1',
        title: 'End of Season Sale',
        startResizable: false,
        endResizable: false,
        bgColor: '#e9e9ea',
        resizable: false,
    },
    {
        id: 7,
        start: '2022-03-21 14:30:00',
        end: '2022-06-01 23:30:00',
        resourceId: 'r1',
        title: 'St Patricks',
        startResizable: false,
        endResizable: false,
        bgColor: '#feedc0',
        resizable: false,

    },
    {
        id: 8,
        start: '2022-02-20 14:30:00',
        end: '2022-03-10 23:30:00',
        resourceId: 'r1',
        title: 'Holi sale',
        startResizable: false,
        endResizable: false,
        bgColor: '#c7e7c7',
        resizable: false,
    },

    {
        id: 9,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'xxxxxxx promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 10,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'yyyyyyy promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 11,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'zzzzzz promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 12,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'AAAAA promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 12,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'BBBBBB promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 13,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'CCCCCC promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 14,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'xxxxxxx promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 15,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'yyyyyyy promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 16,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'zzzzzz promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 17,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'AAAAA promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 18,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'BBBBBB promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 19,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'CCCCCC promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },
    {
        id: 20,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'xxxxxxx promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 21,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'yyyyyyy promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 22,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'zzzzzz promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 23,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'AAAAA promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 24,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'BBBBBB promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 25,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'CCCCCC promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 26,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'xxxxxxx promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 27,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'yyyyyyy promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 28,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'zzzzzz promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 29,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'AAAAA promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 30,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'BBBBBB promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 31,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'CCCCCC promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 32,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'xxxxxxx promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 33,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'yyyyyyy promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 34,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'zzzzzz promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 35,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'AAAAA promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 36,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'BBBBBB promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 37,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'CCCCCC promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 38,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'xxxxxxx promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 39,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'yyyyyyy promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 40,
        start: '2022-01-05 12:30:00',
        end: '2022-02-18 23:30:00',
        resourceId: 'r2',
        title: 'zzzzzz promotion',
        resizable: false,
        bgColor: '#e9e9ea',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 41,
        start: '2022-01-05 12:30:00',
        end: '2022-05-18 23:30:00',
        resourceId: 'r2',
        title: 'AAAAA promotion',
        resizable: false,
        bgColor: '#feedc0',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 42,
        start: '2022-01-05 12:30:00',
        end: '2022-04-18 23:30:00',
        resourceId: 'r2',
        title: 'BBBBBB promotion',
        resizable: false,
        bgColor: '#feedc0',
        startResizable: false,
        endResizable: false,
        movable: false,
    },

    {
        id: 43,
        start: '2022-01-05 12:30:00',
        end: '2022-04-18 23:30:00',
        resourceId: 'r2',
        title: 'CCCCCC promotion',
        resizable: false,
        bgColor: '#feedc0',
        startResizable: false,
        endResizable: false,
        movable: false,
    },
];
class App extends Component {
    constructor(props) {
        super(props);

        let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Quarter);
        this.state = {
            viewModel: schedulerData
        }
        schedulerData.setLocaleMoment(moment);
        schedulerData.setResources(resources);
        schedulerData.setEvents(events);
        schedulerData.config.nonAgendaOtherCellHeaderFormat = 'D'
        schedulerData.config.quarterCellWidth = 16
        schedulerData.config.quarterResourceTableWidth = -50
        schedulerData.config.resourceName = ''
        schedulerData.config.schedulerWidth = '90%'
        schedulerData.config.nonWorkingTimeHeadBgColor = ''
        schedulerData.config.views = []
        schedulerData.schedulerMaxHeight = '100%'

    }



    hideWeekDays() {
        let showIndex = -1;
        document.querySelectorAll("table.scheduler-bg-table th").forEach((item, index) => {
            item.style.visibility = "hidden";
            if (item.style.color === "rgb(153, 153, 153)") {
                showIndex = index + 1;
            } else if (index === showIndex) {
                item.style.visibility = "unset";
                //classname added to the element so that tooltip can be added
                item.className = item.className + " todayTooltip";
            }
        });
    }

    mondayVerticalLine() {
        let showBar = -1;
        document.querySelectorAll("table.scheduler-bg-table td").forEach((item, index) => {
            item.style.border = "none";
            if (item.style.backgroundColor === "rgb(255, 240, 246)") {
                showBar = index + 1;
                item.style.visibility = "hidden";
            } else if (index === showBar) {
                item.style.borderLeft = "dashed 1px #b3bac5";
                item.style.zIndex = "5000";
                //    item.style.transform ="scale(4)";
            }
        });
    }

    plotVerticalsToday() {
        const todayIndex = (this.state.viewModel.headers || [])
            .findIndex(item =>
                moment(item.time).format('DD/MM/YYYY') === moment().format('DD/MM/YYYY')
            );
        let cursor = todayIndex;
        document.querySelectorAll("table.scheduler-bg-table td").forEach((item, index) => {
            if (todayIndex !== -1 && index === cursor) {
                item.style.borderLeft = "2px solid blue";
                item.style.zIndex = "5000";
                cursor += (this.state.viewModel.headers || []).length;
            }
        });

    }

    tooltipToday() {
        const todayIndex = (this.state.viewModel.headers || []).findIndex(item =>
            moment(item.time).format('DD/MM/YYYY') === moment().format('DD/MM/YYYY')
        );

        document.querySelectorAll("table.scheduler-bg-table th").forEach((item, index) => {

            if (index === todayIndex) {
                let dateChild = item.firstChild;
                dateChild.innerHTML = " ";
                dateChild.className = 'tool-tip';

                let dateSpan = document.createElement('span');
                dateChild.appendChild(dateSpan);
                dateSpan.innerHTML = "Today";

                dateSpan.className = 'tooltip-text';
                item.style.visibility = "revert";

            }

        });



    }

    monthlyVerticalLine() {
        let showLine = -1;
        const length = this.state.viewModel.headers.length;
        document.querySelectorAll("table.scheduler-bg-table th").forEach((item, index) => {
            let date = item.firstChild.firstChild.innerHTML;

            //beginning of first month of every quarter
            if (date == 1 && index == 0) {
                showLine = index;
                document.querySelectorAll("table.scheduler-bg-table td").forEach((item, index) => {
                    if (index == showLine) {
                        item.style.borderLeft = "solid 1.5px #7a869a";
                        showLine = showLine + length;
                    }
                });
            }

            // end of month - for month ends falling in between the quarter
            if (date == 1) {
                showLine = index - 1;
                document.querySelectorAll("table.scheduler-bg-table td").forEach((item, index) => {
                    if (index == showLine) {
                        item.style.borderLeft = "solid 1.5px #7a869a";
                        showLine = showLine + length;
                    }
                });
            }

            // end of month -  for dates falling at the end of the quarter
            if ((date == 31 || date == 30) && length == index + 1) {
                showLine = index;
                document.querySelectorAll("table.scheduler-bg-table td").forEach((item, index) => {
                    if (index == showLine) {
                        item.style.borderLeft = "solid 1.5px #7a869a";
                        showLine = showLine + length;
                    }
                });
            }

        });
    }


    componentDidMount() {
        this.hideWeekDays();
        this.mondayVerticalLine();
        this.plotVerticalsToday();
        this.monthlyVerticalLine();
        this.tooltipToday();

    };

    prevClick = (schedulerData) => {
        schedulerData.prev();
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        }, () => {
            this.hideWeekDays();
            this.mondayVerticalLine();
            this.plotVerticalsToday();
            this.monthlyVerticalLine();
            this.tooltipToday();
        });

    }

    nextClick = (schedulerData) => {
        schedulerData.next();
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        }, () => {
            this.hideWeekDays();
            this.mondayVerticalLine();
            this.plotVerticalsToday();
            this.monthlyVerticalLine();
            this.tooltipToday();
        });
    }

    render() {
        const schedulerData = this.state.viewModel;
        let displayMonths = moment.months();

        console.log("schedulerData", schedulerData);
        let startMonth = moment(schedulerData.startDate, 'YYYY-MM-DD').toDate().getMonth();


        return (
            <div>
                <div>
                    <div className='month-view'>{displayMonths[startMonth]}</div>
                    <div className='month-view'>{displayMonths[startMonth + 1]}</div>
                    <div className='month-view'>{displayMonths[startMonth + 2]}</div>
                </div>
                <Scheduler schedulerData={schedulerData}
                    prevClick={this.prevClick}
                    nextClick={this.nextClick}
                    showAgenda={false} />
            </div>
        );
    };
}

export default withDragDropContext(App)
