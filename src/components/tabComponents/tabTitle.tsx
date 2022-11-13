import React from "react"

type Props = {
    title: string;
    index: number;
    active?: string;
    setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index, active }) => {

    return (
        <li>
            <a className={`flex-sm-fill text-sm-center nav-link ${active? active: ''}`}
                id="orders-all-tab" data-bs-toggle="tab" href="#orders-all"
                role="tab" aria-controls="orders-all" aria-selected="true"
                onClick={() => setSelectedTab(index)}>
                {title}
            </a>
        </li>
    )
}

export default TabTitle