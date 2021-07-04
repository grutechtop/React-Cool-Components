import { FormHelperText } from "@material-ui/core";
import IFormProps from "interfaces/IFormProps";
import style from './ErrorAndWarningHelperText.module.scss'
import classnames from 'classnames'


export default function ErrorAndWarningHelperText(props : IFormProps){

    const {error, warning, showErrorMessage = true, showWarningMessage = true } = props

    return <div className={classnames(style.errorAndWarningHelperText, 'error-and-warning-wrapper')}>
        {error && showErrorMessage && <FormHelperText className={classnames(style.errorText, 'error-text')}>{error}</FormHelperText>}
        {warning && showWarningMessage && <FormHelperText className={classnames(style.warningText, 'warning-text')}>{warning}</FormHelperText>}
    </div>
}