import React, { Component } from 'react';
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT} from 'react-big-scheduler';
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
    bgColor: 'red',
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
    bgColor: 'blue',
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
    bgColor: 'green',
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
    bgColor: 'pink',
    resizable: false,
  },
  {
    id: 5,
    start: '2022-05-20 15:30:00',
    end: '2022-06-01 23:30:00',
    resourceId: 'r2',
    title: 'Black Friday Sale',
    bgColor: '#f759ab',
    resizable: false,
    startResizable: false,
    endResizable: false,
  },
  {
    id: 6,
    start: '2022-02-20 14:30:00',
    end: '2022-02-28 23:30:00',
    resourceId: 'r1',
    title: 'End of Season Sale',
    startResizable: false,
    endResizable: false,
    bgColor: 'red',
    resizable: false,
  },
  {
    id: 7,
    start: '2022-04-20 14:30:00',
    end: '2022-06-01 23:30:00',
    resourceId: 'r1',
    title: 'St Patricks',
    startResizable: false,
    endResizable: false,
    bgColor: 'maroon',
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
    bgColor: 'lightGreen',
    resizable: false,
  },
];
class App extends Component {
  constructor(props){
    super(props);

    let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Quarter);
    this.state = {
        viewModel: schedulerData
    }
    schedulerData.setLocaleMoment(moment);
    schedulerData.setResources(resources);
    schedulerData.setEvents(events);
    schedulerData.config.nonAgendaOtherCellHeaderFormat = 'D'
    schedulerData.config.quarterCellWidth = 14
    schedulerData.config.quarterResourceTableWidth = -10
    schedulerData.config.resourceName = ''
    schedulerData.config.schedulerWidth= '90%'
    schedulerData.config.nonWorkingTimeHeadBgColor= ''
    schedulerData.config.nonWorkingTimeBodyBgColor= ''
    schedulerData.config.views= []    
  }

  hideWeekDays () {
    let showIndex = -1;
    document.querySelectorAll("table.scheduler-bg-table th").forEach((item, index) =>{
      item.style.visibility ="hidden";
      if(item.style.color === "rgb(153, 153, 153)"){
        showIndex = index+1;
      }else if(index === showIndex){
        item.style.visibility ="unset";
      }
    });
  }

  componentDidMount() {
    this.hideWeekDays();
  };

  prevClick = (schedulerData)=> {
    schedulerData.prev();
    schedulerData.setEvents(events);
    this.setState({
        viewModel: schedulerData
    }, () => this.hideWeekDays());
    
  }

  nextClick = (schedulerData)=> {
    schedulerData.next();
    schedulerData.setEvents(events);
    this.setState({
        viewModel: schedulerData
      }, () => this.hideWeekDays());
  }

  onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
    if(schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.next();
      schedulerData.setEvents(schedulerData.events);
      this.setState({
          viewModel: schedulerData
      });

      schedulerContent.scrollLeft = maxScrollLeft - 10;
    }
  }

  onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
    if(schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.prev();
      schedulerData.setEvents(schedulerData.events);
      this.setState({
          viewModel: schedulerData
      });

      schedulerContent.scrollLeft = 10;
    }
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
