import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div style={{display:"flex",alignItems:"center",padding:"20px"}}>
                <div className="filter-result" style={{paddingRight:"50px"}}>{this.props.count}</div>
                <div className="filter-type" style={{display:"flex"}}>
                    Filter
                    <select value={this.props.type} onChange={this.props.filterProducts}>
                        <option value="">All</option>
                        <option value="Burgers">Burgers</option>
                        <option value="Cakes">Cakes</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Soft-drinks">Soft-drinks</option>
                    </select>
                </div>
            </div>
        )
    }
}
