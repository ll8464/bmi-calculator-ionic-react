import React from "react";
import { IonCol, IonRow, IonCard, IonCardContent } from "@ionic/react";

const BmiResult: React.FC<{ result: number | string }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent>
            <h2>{props.result}</h2>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;
