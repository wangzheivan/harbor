export const PUSH_IMAGE_HTML: string = `
<div>
    <clr-dropdown>
        <button class="btn btn-link btn-font" clrDropdownToggle (click)="onclick()">
            {{ 'PUSH_IMAGE.TITLE' | translate | uppercase}}
            <clr-icon shape="caret down"></clr-icon>
        </button>
        <clr-dropdown-menu *clrIfOpen [clrPosition]="'bottom-right'" style="min-width:500px;">
            <div class="commands-container">
                <section>
                    <span><h5 class="h5-override">{{ 'PUSH_IMAGE.TITLE' | translate }}</h5></span>
                    <span>
                      <clr-tooltip>
                        <clr-icon  clrTooltipTrigger shape="info-circle" class="info-tips-icon" size="24"></clr-icon>
                        <clr-tooltip-content [clrPosition]="'top-right'" [clrSize]="'md'" *clrIfOpen>
                            {{ 'PUSH_IMAGE.TOOLTIP' | translate }}
                        </clr-tooltip-content>
                      </clr-tooltip>
                    </span>
                </section>
                <section>
                  <hbr-inline-alert #copyAlert></hbr-inline-alert>
                </section>
                <section>
                    <article class="commands-section">
                        <hbr-copy-input #tagCopy (onCopyError)="onCpError($event)" inputSize="50" headerTitle="{{ 'PUSH_IMAGE.TAG_COMMAND' | translate }}" defaultValue="{{tagCommand}}"></hbr-copy-input>
                    </article>
                    <article class="commands-section">
                        <hbr-copy-input #pushCopy (onCopyError)="onCpError($event)" inputSize="50" headerTitle="{{ 'PUSH_IMAGE.PUSH_COMMAND' | translate }}" defaultValue="{{pushCommand}}"></hbr-copy-input>
                    </article>
                </section>
            </div>
        </clr-dropdown-menu>
    </clr-dropdown>
</div>
`;