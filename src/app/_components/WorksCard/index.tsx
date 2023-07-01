import React, { useMemo } from "react";
import { workCardStyle } from "./style.css";
import { WorkDetail, works } from "@/utils/ui";
import { format } from "date-fns";

type WorkProps = {
  detail: WorkDetail
}
const Work: React.FC<WorkProps> = ({
  detail
}) => {
  const term = useMemo(() => {
    if (detail.endDate instanceof Date) {
      return `${format(detail.startDate, 'yyyy/MM/dd')} ~ ${format(detail.endDate, 'yyyy/MM/dd')}`
    }
    return `${format(detail.startDate, 'yyyy/MM/dd')} ~ 現在`
  }, [detail])

  return (
    <div className={workCardStyle.workInner}>
      <h3>{detail.name}</h3>
      <span className={workCardStyle.term}>
        {term}
      </span>

      <div className={workCardStyle.detailArea}>
        {detail.description.map((v, idx) => (
          <p key={`${idx}`}>{v}</p>
        ))}
        {detail.link && (
          <a href={detail.link} target='_blank' rel='noopener noreferrer'>{detail.link}</a>
        )}
      </div>
    </div>
  )
}

export const WorksCard = () => {
  return (
    <div className={workCardStyle.wrapper}>
      <h2 className={workCardStyle.head}>Works</h2>

      <div className={workCardStyle.inner}>
        {works.map((detail, idx) => {
          return (
            <Work detail={detail} key={`${idx}`} />
          )
        })
        }
      </div>
    </div>
  )
}
