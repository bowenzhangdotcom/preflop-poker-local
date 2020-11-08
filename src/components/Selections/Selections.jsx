import React from 'react';
import styles from './Selections.module.css';

const selectionsRender = {
    6: {
        NA: {
            heroPosition: "hide",
            villianPosition: "hide",
            sizing: "hide"
        },
        RFI: {
            villianPosition: "hide",
            BBHP: "hide",
            sizing: "hide"
        }, 
        FOR: {
            UTGHP: "hide",
            BBVP: "hide",
            sizing: "hide"
        }, 
        F3B: {
            BBHP: "hide",
            UTGVP: "hide",
            sizing: "hide"
        }
    }, 
    2: {
        NA: {
            heroPosition: "hide",
            villianPosition: "hide",
            sizing: "hide"
        },
        RFI: {
            heroPosition: "hide",
            villianPosition: "hide",
            '2x': "hide",
            '2.25x': "hide",
            '2.5x': "hide",
            '3x': "hide",
            '3.5x': "hide",
            '4x': "hide",
            '4.5x': "hide",
            '5x': "hide",

        }, 
        FOR: {
            heroPosition: "hide",
            villianPosition: "hide",
            '3.5x': "hide",
            '4x': "hide",
            '4.5x': "hide",
            '5x': "hide",
            disclaimerRFI: "hide",
        }, 
        F3B: {
            heroPosition: "hide",
            villianPosition: "hide",
            sizingRFI: "hide",
            disclaimerRFI: "hide",
        }
    },
    NA: {
        NA: {
            chartType: "hide",
            heroPosition: "hide",
            villianPosition: "hide",
            sizing: "hide"
        }
    },
}

class Selections extends React.Component {
    render() {
        const selectionVisibility = selectionsRender[this.props.selectedPlayerCount][this.props.selectedChartType];
        return (
                <>
                    <div className={styles.playerCount} id="chartType" onChange={this.props.handlePlayerCountUpdate}>
                        <h3>Player Count</h3>
                        <ul>
                            <li>
                                <input type='radio' value='2' name='playerCount' id='2'/>
                                <label htmlFor='2' className={styles.SelectionsLabel}>2</label>
                            </li>
                            <li>
                                <input type='radio' value='6' name='playerCount'  id='6'/>
                                <label htmlFor='6' className={styles.SelectionsLabel}>6</label>
                            </li>
                        </ul>
                    </div> 
                    <div className={`${styles.chartType} ${styles[selectionVisibility['chartType']]}`} id="chartType" onChange={this.props.handleChartTypeUpdate}>
                        <h3>Chart Type</h3>
                        <ul>
                            <li>
                                <input type='radio' value='RFI' name='chartType' id='RFI'/>
                                <label htmlFor='RFI' className={styles.SelectionsLabel}>RFI</label>
                            </li>
                            <li>
                                <input type='radio' value='FOR' name='chartType'  id='FOR'/>
                                <label htmlFor='FOR' className={styles.SelectionsLabel}>FOR</label>
                            </li>
                            <li>
                                <input type='radio' value='F3B' name='chartType'  id='F3B'/>
                                <label htmlFor='F3B' className={`${styles.SelectionsLabel} ${styles[selectionVisibility['F3B']]}`}>F3B</label>
                            </li>
                        </ul>
                    </div>  
                    <div className={`${styles.sizing} ${styles[selectionVisibility['sizing']]}`}id="sizing" onChange={this.props.handleSizingUpdate}>
                        <h3>Sizing</h3>
                        <div className={`${styles.TextLabel} ${styles[selectionVisibility['disclaimerRFI']]}`}>2.5x SB open size</div>
                        <div className={`${styles[selectionVisibility['sizingRFI']]}`}>
                            <ul>
                                <li>
                                    <input type='radio' value='2x' name='sizing' id='2x'/>
                                    <label htmlFor='2x' className={`${styles.SelectionsLabel} ${styles[selectionVisibility['2x']]}`}>2x</label>
                                </li>
                                <li>
                                    <input type='radio' value='2.25x' name='sizing' id='2.25x'/>
                                    <label htmlFor='2.25x' className={`${styles.SelectionsLabel} ${styles[selectionVisibility['2.25x']]}`}>2.25x</label>
                                </li>
                                <li>
                                    <input type='radio' value='2.5x' name='sizing' id='2.5x'/>
                                    <label htmlFor='2.5x' className={`${styles.SelectionsLabel} ${styles[selectionVisibility['2.5x']]}`}>2.5x</label>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <input type='radio' value='3x' name='sizing' id='3x'/>
                                    <label htmlFor='3x' className={`${styles.SelectionsLabel} ${styles[selectionVisibility['3x']]}`}>3x</label>
                                </li>
                                <li>
                                    <input type='radio' value='3.5x' name='sizing' id='3.5x'/>
                                    <label htmlFor='3.5x' className={`${styles.SelectionsLabel} ${styles[selectionVisibility['3.5x']]}`}>3.5x</label>
                                </li>
                                <li>
                                    <input type='radio' value='4x' name='sizing' id='4x'/>
                                    <label htmlFor='4x' className={`${styles.SelectionsLabel} ${styles[selectionVisibility['4x']]}`}>4x</label>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <input type='radio' value='4.5x' name='sizing' id='4.5x'/>
                                    <label htmlFor='4.5x' className={`${styles.SelectionsLabel} ${styles[selectionVisibility['4.5x']]}`}>4.5x</label>
                                </li>
                                <li>
                                    <input type='radio' value='5x' name='sizing' id='5x'/>
                                    <label htmlFor='5x' className={`${styles.SelectionsLabel} ${styles[selectionVisibility['5x']]}`}>5x</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles.heroPosition} ${styles[selectionVisibility['heroPosition']]}`}id="heroPosition" onChange={this.props.handleHeroPositionUpdate}>
                        <h3>Hero Position</h3>
                        <div>
                            <ul>
                                <li>
                                    <input type='radio' value='UTG' name='heroPosition' id='UTG-HP'/>
                                    <label htmlFor='UTG-HP' className={`${styles.SelectionsLabel} ${styles[selectionVisibility['UTGHP']]}`}>UTG</label>
                                </li>
                                <li>
                                    <input type='radio' value='HJ' name='heroPosition'  id='HJ-HP'/>
                                    <label htmlFor='HJ-HP' className={styles.SelectionsLabel}>HJ</label>
                                </li>
                                <li>
                                    <input type='radio' value='CO' name='heroPosition'  id='CO-HP'/>
                                    <label htmlFor='CO-HP' className={styles.SelectionsLabel}>CO</label>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <input type='radio' value='BTN' name='heroPosition' id='BTN-HP'/>
                                    <label htmlFor='BTN-HP' className={styles.SelectionsLabel}>BTN</label>
                                </li>
                                <li>
                                    <input type='radio' value='SB' name='heroPosition'  id='SB-HP'/>
                                    <label htmlFor='SB-HP' className={styles.SelectionsLabel}>SB</label>
                                </li>
                                <li>
                                    <input type='radio' value='BB' name='heroPosition'  id='BB-HP'/>
                                    <label htmlFor='BB-HP' className={`${styles.SelectionsLabel} ${styles[selectionVisibility['BBHP']]}`}>BB</label>
                                </li>
                            </ul>
                        </div>
                    </div>  
                    <div className={`${styles.villianPosition} ${styles[selectionVisibility['villianPosition']]}`} id="villianPosition" onChange={this.props.handleVillianPositionUpdate}>
                        <h3>Villian Position</h3>
                        <div>
                            <ul>
                                <li>
                                    <input type='radio' value='UTG' name='villianPosition' id='UTG-VP'/>
                                    <label htmlFor='UTG-VP' className={`${styles.SelectionsLabel} ${styles[selectionVisibility['UTGVP']]}`}>UTG</label>
                                </li>
                                <li>
                                    <input type='radio' value='HJ' name='villianPosition'  id='HJ-VP'/>
                                    <label htmlFor='HJ-VP' className={styles.SelectionsLabel}>HJ</label>
                                </li>
                                <li>
                                    <input type='radio' value='CO' name='villianPosition'  id='CO-VP'/>
                                    <label htmlFor='CO-VP' className={styles.SelectionsLabel}>CO</label>
                                </li>
                            </ul>
                        </div>
                       <div>
                        <ul>
                                <li>
                                    <input type='radio' value='BTN' name='villianPosition' id='BTN-VP'/>
                                    <label htmlFor='BTN-VP' className={styles.SelectionsLabel}>BTN</label>
                                </li>
                                <li>
                                    <input type='radio' value='SB' name='villianPosition'  id='SB-VP'/>
                                    <label htmlFor='SB-VP' className={styles.SelectionsLabel}>SB</label>
                                </li>
                                <li>
                                    <input type='radio' value='BB' name='villianPosition'  id='BB-VP'/>
                                    <label htmlFor='BB-VP' className={`${styles.SelectionsLabel} ${styles[selectionVisibility['BBVP']]}`}>BB</label>
                                </li>
                            </ul>
                       </div>
                    </div> 
                </>
        );
    };
};

export default Selections;