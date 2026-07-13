"use client"
import { getCalEventTypes } from "@/lib/cal";
import Cal, { getCalApi } from "@calcom/embed-react";

import { useEffect, useState } from "react";
export  function CalSchedule() {
  const firstCallCall = async ()=>{
    const cal = await getCalApi({"namespace":"30min"});
    cal("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#0f9fff"},"dark":{"cal-brand":"#0f9fff"}},"hideEventTypeDetails":false,"layout":"month_view"});
  }
  useEffect(() => {
    firstCallCall()
  }, [])
  return (
    <>
    <Cal namespace="30min" calLink="tech-dipesh/30min"
    style={{width:"100%",height:"500%",overflow:"scroll"}}
    config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}} />
    </>
  );
}