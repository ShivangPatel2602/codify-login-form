import React from "react";

function Survey2() {
    return (
        <div>
            <h2>
                2. Which fields of Computer Science are you interested in?
            </h2>

            <div class="container">
                <div class="row">
                    <div class="form-group">
                        <div class="items-collection">

                            <div class="items col-xs-6 col-sm-3 col-md-3 col-lg-3">
                                <div class="info-block block-info clearfix">
                                    <div data-toggle="buttons" class="btn-group bizmoduleselect">
                                        <label class="btn btn-secondary">
                                            <div class="itemcontent">
                                                <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                                <span class="fa fa-car fa-2x"></span>
                                                <h5>car</h5>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Survey2;