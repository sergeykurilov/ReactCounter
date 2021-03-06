import React, {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import s from "./SettingCounter.module.css"
import {MaxValue} from "../../Components/Input/MaxValue";
import {StartValue} from "../../Components/Input/StartValue";


type CounterPropsType = {
    titleValue: string,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    error: string,
    maxValue: number,
    maximumValue: () => void,
    startValue: number,
    onChangeHandlerMinValue: (e: ChangeEvent<HTMLInputElement>) => void,
    startValueRender: number
    setStartValueRender: (start: number) => void
    maxValueRender: number
    setMaxValueRender: (max: number) => void
    setButtonHandler: () => void
}

export const SettingCounter = (props: CounterPropsType) => {

    return (
        <div className={"settings-counter-blocks"}>
            <div className={"settings-counter-block"}>
                <div className={s.title}>{props.titleValue}</div>
                <MaxValue maxValue={props.maxValue} onChange={props.onChangeHandler}/>
                <div>
                </div>
                <StartValue startValue={props.startValue} onChange={props.onChangeHandlerMinValue}/>
                <div className={s.setValue}>
                    <button disabled={(props.startValueRender === props.startValue && props.maxValue === props.maxValueRender) || props.error !== ""}
                            onClick={props.setButtonHandler}>Set</button>
                </div>
            </div>

        </div>
    )
}