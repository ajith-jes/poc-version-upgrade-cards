
import React, { FC, useEffect, useRef, useState } from 'react';

import { MicroImagePreviewProps } from './index.interface';
import { PhotoProvider, PhotoView } from 'react-photo-view';

/**
 * this component will listen for "window-image-preview-event" event
 */
export const MicroImagePreview: FC<MicroImagePreviewProps> = (_props) => {
  return (
    <div>
      <PhotoProvider >
        <PhotoView src={_props.src} >
          <img src={previewIcon} alt="image preview"/>
        </PhotoView>
      </PhotoProvider>
    </div>
  );
};



const previewIcon = "data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ7SURBVHgB7VVLbhpBEK1qgxfJhqyDo+EGDVLWxjcgJzC5AewciJSxZEikLPANgk8QfALILosEOidgEo+ULd5kYaArVT14DMPw8d4lIZruqldVrz4APMkOwX0V9dnYA8h47sccJ+Zz3uxjh9tBb8p4gB/kyIq55TcCmCDhwML82rRfdR/lQDdCjQgdfiyzxgQsXbGqUYqCCJxyllQFAY/5l0cEAdnpiflUCHY60M2wpgA6fAyA7PlwS3QipUZYBZQsybMW6uZj/nKjgxic6Js9nFWMX5jAHqL9v56aWbGrJJ3EDvQZKx3MxxxNb3jx8g2kZUZ4TEg5InuVxnuxGfaFVktQNO2oCVTsSdk+fwU2c1dfM2yEI5cZ2gICvVCovshdUo+yUw4MA6nf/Z1zwEWtIpInnDMtwUrk7g00H+vD1pGWj5zlrvQurC3rOkqJziUL/f6mHDvgqCoSfVpBGeiUDcyw9cCrnLlNDdNVTuoP2/mudB5aqMUOFpKDNCG6hQ2CG2zIYtwczgEpkOhyuvGnugaCOOBotV6iQwrO4EwVdZP693QzK71FEJFIB/AEefRvWjSXq+3JbyMB5IEykVM32eZnK19cAedOlGZhB0JjIc7AZZF1hfPwefZrMqqRABG85ahuFdJvvqonwR2Ysh2J3manJzEDywqlpqOBBwZ71t7V00Y/TXRtnJPA3Gpx3fbQEMtFhsVDHZAqqLL9tJqsgQvnzw5HaeBrGcRGMvpTGbxokbHSwJK95swWtUFPAWk6wFPXSW61YM346yt867ouRR1RIeStSYmWjLbsL6XA/3FxNNiEsfcfzms/1DQj5ySTmQXf/f3q8yQ75T8z5yRyHX5O7AAAAABJRU5ErkJggg=="