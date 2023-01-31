import React, { useState } from "react";
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";

const DaypilotWrapperComponent = React.forwardRef((props, ref) => {
    
    let timeline = null;

    const [config, setConfig] = useState({
        heightSpec: "Fixed",
        height: 60,
        eventHeight: 40,
        cellWidthSpec: "Fixed",
        cellWidth: 12.5,
        cellDuration: 15,
        days: 1,
        scale: "CellDuration",
        headerHeight: 20,
        visible: true,
        separators: [{color:"black", location: new DayPilot.Date(), width: 1, layer: "AboveEvents"}],

        timeHeaders: [{ groupBy: "Hour", format: "HH"}],
        onBeforeGridLineRender: (args) => {
            // Hide vertical lines which do not indicate full or half hour
            if (args.type === "VerticalLine" && args.end.getMinutes() !== 0 && args.end.getMinutes() !== 30) {
                args.hidden = true;
            }
        }
    });

    return (
        <>
        {(typeof window !== 'undefined' && typeof window.navigator !== 'undefined') &&
            <>
                <DayPilotScheduler
                    {...config}
                    resources={[{name: '', id: 1}]}
                    events={[]}
                    startDate={new DayPilot.Date()}
                    ref={component => { timeline = component && component.control }}
                />
                
            </>
         }
        </>
    );
});

DaypilotWrapperComponent.displayName = "DaypilotWrapper";

export default DaypilotWrapperComponent;