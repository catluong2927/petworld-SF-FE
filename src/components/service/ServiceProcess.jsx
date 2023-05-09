import React from "react";
export const ServiceProcess = (props) => {
    return (
        <div
            className="tab-content tab-content2"
        >
            <div
                className="tab-pane fade active show"
            >
                <div className="description">
                    <p className="para-2 mb-3">
                        In this package, we provide you with the following services:
                    </p>
                    <ul>
                        {props.process.map(service =>
                            <li key={service.id}>
                                <strong>{service.name}</strong>{'   '}
                                {service.description}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}