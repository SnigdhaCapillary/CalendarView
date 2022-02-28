import React, {Component, useEffect} from 'react'
// import {PropTypes} from 'prop-types' 
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT} from 'react-big-scheduler'
import withDragDropContext from './withDnDContext'
import 'react-big-scheduler/lib/css/style.css'
import moment from 'moment'
import './Style.css'


class App extends Component{
    constructor(props){
        super(props);

        let schedulerData = new SchedulerData(new moment("2022-01-01").format(DATE_FORMAT), ViewTypes.Quarter);
        // let schedulerData = new SchedulerData('2022-01-01', ViewTypes.Quarter);
        moment.locale('zh-cn');
        schedulerData.setLocaleMoment(moment);
        // schedulerData.localeMoment.locale('en');

        

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
               start: '2022-01-01 09:30:00',
               end: '2022-01-20 23:30:00',
               resourceId: 'r1',
               title: 'New Year Extended Promo',
               bgColor: '#D9D9D9'
           },
           {
               id: 2,
               start: '2022-01-01 12:30:00',
               end: '2022-01-18 23:30:00',
               resourceId: 'r2',
               title: 'Pongal Sale',
               resizable: false
           },
           {
               id: 3,
               start: '2022-01-25 12:30:00',
               end: '2022-01-31 23:30:00',
               resourceId: 'r3',
               title: 'Republic Day sale',
               movable: false
           },
           {
               id: 4,
               start: '2022-02-01 14:30:00',
               end: '2022-02-20 23:30:00',
               resourceId: 'r1',
               title: 'Valentine Season',
               startResizable: false
           },
           {
               id: 5,
               start: '2022-20-05 15:30:00',
               end: '2022-03-01 23:30:00',
               resourceId: 'r2',
               title: 'Black Friday Sale',
            //    rrule: 'FREQ=WEEKLY;DTSTART=20211219T013000Z;BYDAY=FR',
               bgColor: '#f759ab'
           },
           {
            id: 6,
            start: '2022-02-20 14:30:00',
            end: '2022-02-28 23:30:00',
            resourceId: 'r1',
            title: 'End of Season Sale',
            startResizable: false
        },

        {
            id: 7,
            start: '2022-02-20 14:30:00',
            end: '2022-03-01 23:30:00',
            resourceId: 'r1',
            title: 'St Patricks',
            startResizable: false
        },
        {
            id: 8,
            start: '2022-02-20 14:30:00',
            end: '2022-03-10 23:30:00',
            resourceId: 'r1',
            title: 'Holi sale',
            startResizable: false
        },
       ];
        schedulerData.setResources(resources);
        schedulerData.setEvents(events);
       
        this.state = {
            viewModel: schedulerData
        }
        //  console.log("scheduler config value",schedulerData.config.nonAgendaOtherCellHeaderFormat) ;
         schedulerData.config.nonAgendaOtherCellHeaderFormat = 'D'
         schedulerData.config.quarterCellWidth = 15
         schedulerData.config.quarterResourceTableWidth = -10
         schedulerData.config.resourceName = ''
         schedulerData.config.schedulerWidth= '81%'
         schedulerData.config.nonWorkingTimeHeadBgColor= ''
         schedulerData.config.nonWorkingTimeBodyBgColor= ''

         schedulerData.config.views= []
           
    }

    componentDidMount() {

        let showIndex = -1;
        let showTdIndex = -1;
       document.querySelectorAll("table.scheduler-bg-table th").forEach((item, index) =>{
       item.style.visibility ="hidden";
       if(item.style.color === "rgb(153, 153, 153)"){
         showIndex = index+1;
       }else if(index === showIndex){
        item.style.visibility ="unset";
       }
    })

    // document.querySelectorAll("table.scheduler-table").forEach((item, index) =>{
    //     console.log("in query");
    //     item.style.visibility ="hidden";
    //     if(item.style.color === "rgb(153, 153, 153)"){
    //         showTdIndex = index+1;
    //     }else if(index === showTdIndex){
    //      item.style.borderRight= "1px solid red";
    //     }
    //  }
    //  )
    
};


    render(){
        
        const schedulerData = this.state.viewModel;
        return (
            
                <div>
                    {/* <h3 style={{textAlign: 'center'}}>App example<ViewSrcCode srcCodeUrl="https://github.com/StephenChou1017/react-big-scheduler/blob/master/example/App.js" /></h3> */}
                    <Scheduler schedulerData={schedulerData}
                               prevClick={this.prevClick}
                               nextClick={this.nextClick}
                               onSelectDate={this.onSelectDate}
                               onViewChange={this.onViewChange}
                            //    eventItemClick={this.eventClicked}
                            //    viewEventClick={this.ops1}
                            //    viewEventText="Ops 1"
                            //    viewEvent2Text="Ops 2"
                            //    viewEvent2Click={this.ops2}
                              // updateEventStart={this.updateEventStart}
                                //  updateEventEnd={this.updateEventEnd}
                            //    moveEvent={this.moveEvent}
                            //    newEvent={this.newEvent}
                               onScrollLeft={this.onScrollLeft}
                               onScrollRight={this.onScrollRight}
                               onScrollTop={this.onScrollTop}
                               onScrollBottom={this.onScrollBottom}
                               toggleExpandFunc={this.toggleExpandFunc}
                    />
                </div>


        )
    }


    
    prevClick = (schedulerData)=> {
        schedulerData.prev();
        schedulerData.setEvents(schedulerData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    nextClick = (schedulerData)=> {
        schedulerData.next();
        schedulerData.setEvents(schedulerData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onViewChange = (schedulerData, view) => {
        schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
        schedulerData.setEvents(schedulerData.events);
        this.setState({
            viewModel: schedulerData
        })
        console.log("scheduler events after state update",schedulerData.events) ;
    }

    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(date);
        schedulerData.setEvents(schedulerData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    // eventClicked = (schedulerData, event) => {
    //     alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
    // };

    // ops1 = (schedulerData, event) => {
    //     alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`);
    // };

    // ops2 = (schedulerData, event) => {
    //     alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`);
    // };

    // newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
    //     if(window.confirm(`Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`)){

    //         let newFreshId = 0;
    //         schedulerData.events.forEach((item) => {
    //             if(item.id >= newFreshId)
    //                 newFreshId = item.id + 1;
    //         });

    //         let newEvent = {
    //             id: newFreshId,
    //             title: 'New event you just created',
    //             start: start,
    //             end: end,
    //             resourceId: slotId,
    //             bgColor: 'purple'
    //         }
    //         schedulerData.addEvent(newEvent);
    //         this.setState({
    //             viewModel: schedulerData
    //         })
    //     }
    // }

    // updateEventStart = (schedulerData, event, newStart) => {
    //     if(window.confirm(`Do you want to adjust the start of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newStart: ${newStart}}`)) {
    //         schedulerData.updateEventStart(event, newStart);
    //     }
    //     this.setState({
    //         viewModel: schedulerData
    //     })
    // }

    // updateEventEnd = (schedulerData, event, newEnd) => {
    //     if(window.confirm(`Do you want to adjust the end of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newEnd: ${newEnd}}`)) {
    //         schedulerData.updateEventEnd(event, newEnd);
    //     }
    //     this.setState({
    //         viewModel: schedulerData
    //     })
  //  }

    // moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
    //     if(window.confirm(`Do you want to move the event? {eventId: ${event.id}, eventTitle: ${event.title}, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`)) {
    //         schedulerData.moveEvent(event, slotId, slotName, start, end);
    //         this.setState({
    //             viewModel: schedulerData
    //         })
    //     }
    // }

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

    onScrollTop = (schedulerData, schedulerContent, maxScrollTop) => {
        console.log('onScrollTop');
    }

    onScrollBottom = (schedulerData, schedulerContent, maxScrollTop) => {
        console.log('onScrollBottom');
    }

    toggleExpandFunc = (schedulerData, slotId) => {
        schedulerData.toggleExpandStatus(slotId);
        this.setState({
            viewModel: schedulerData
        });
    }
}

export default withDragDropContext(App)
