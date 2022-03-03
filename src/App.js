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
        start: '2022-03-21 09:30:00',
        end: '2022-04-20 23:30:00',
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
        end: '2022-01-18 23:30:00',
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
        start: '2022-01-25 12:30:00',
        end: '2022-03-01 23:30:00',
        resourceId: 'r3',
        title: 'Republic Day sale',
        movable: false,
        bgColor: '#e9e9ea',
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
            }
        });
    }

    mondayVerticalLine() {
        let showBar = -1;
        document.querySelectorAll("table.scheduler-bg-table td").forEach((item, index) =>{
            item.style.border ="none";
            if(item.style.backgroundColor === "rgb(255, 240, 246)"){
                showBar = index+1;
                item.style.visibility ="hidden";
            }else if(index === showBar){
               item.style.borderLeft  ="thin dotted grey";
            //    item.style.height ="100%";
          }
        });
    }

    plotVerticalsToday(){
      const todayIndex = (this.state.viewModel.headers || [])
        .findIndex(item => 
          moment(item.time).format('DD/MM/YYYY') === moment().format('DD/MM/YYYY')
        );
      let cursor = todayIndex;
      document.querySelectorAll("table.scheduler-bg-table td").forEach((item, index) =>{
          if(todayIndex !== -1 && index === cursor) {
            item.style.borderLeft ="2px solid red";
            cursor += (this.state.viewModel.headers || []).length;
          }
      });
    }

    monthEndVerticalLine() {
        let showLine = -1;
        const length = this.state.viewModel.headers.length;
        console.log("length", length);
        document.querySelectorAll("table.scheduler-bg-table th").forEach((item, index) => {

            let date = item.firstChild.firstChild.innerHTML;
            if (date == 1) {
                showLine = index - 1;

                document.querySelectorAll("table.scheduler-bg-table td").forEach((item, index) => {
                    if (index === showLine) {
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
    this.monthEndVerticalLine();
    
  };

  prevClick = (schedulerData)=> {
    schedulerData.prev();
    schedulerData.setEvents(events);
    this.setState({
        viewModel: schedulerData
    }, () => {this.hideWeekDays();
              this.mondayVerticalLine();
              this.plotVerticalsToday();
              this.monthEndVerticalLine();
            });
    
  }

  nextClick = (schedulerData)=> {
    schedulerData.next();
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData
    }, () => {
      this.hideWeekDays();
      this.mondayVerticalLine();
      this.plotVerticalsToday();
      this.monthEndVerticalLine();
    });
  }

  render(){
    const schedulerData = this.state.viewModel;
    return (
      <div>
        <Scheduler schedulerData={schedulerData}
          prevClick={this.prevClick}
          nextClick={this.nextClick}
          showAgenda={false}
        />
      </div>
    );
  };
}

export default withDragDropContext(App)
