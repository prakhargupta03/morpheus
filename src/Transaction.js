import React from 'react';
import { withStyles,makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const useStyles1 = makeStyles(theme => ({
    root: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing(2.5),
    },
  }));

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    function handleFirstPageButtonClick(event) {
      onChangePage(event, 0);
    }
  
    function handleBackButtonClick(event) {
      onChangePage(event, page - 1);
    }
  
    function handleNextButtonClick(event) {
      onChangePage(event, page + 1);
    }
  
    function handleLastPageButtonClick(event) {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    }
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="Previous Page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }

const styles = theme => ({
  root: {
    width: '90%',           
    margin:'auto',    
    marginTop: theme.spacing(5),
    overflowX: 'auto',
    textAlign:'center',
  },
  table: {
    minWidth: 400,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'space-around'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
    width:200
  }
});

const createData = (id, contractaddr, balrupee, pgy, category) =>{
  return { id, contractaddr, balrupee, pgy, category };
}

const categories = [
    {
      value: 'Unspecified',
      label: 'Unspecified',
    },
    {
      value: 'Rent',
      label: 'Rent',
    },
    {
      value: 'Bet',
      label: 'Bet',
    },
    {
      value: 'Hire',
      label: 'Hire',
    },
    {
      value: 'Others',
      label: 'Others',
    },
  ];

class Transactions extends React.Component {
    constructor(props){
        super(props)
        this.state={
            rows :[
                createData(1, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(2, '0x14FCF', 10000, 30.2, 'unspecified'),
                createData(3, '0x14FCF', 2000, -30.2, 'unspecified'),
                createData(4, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(5, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(1, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(2, '0x14FCF', 10000, 30.2, 'unspecified'),
                createData(3, '0x14FCF', 2000, -30.2, 'unspecified'),
                createData(4, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(5, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(1, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(2, '0x14FCF', 10000, 30.2, 'unspecified'),
                createData(3, '0x14FCF', 2000, -30.2, 'unspecified'),
                createData(4, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(5, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(1, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(2, '0x14FCF', 10000, 30.2, 'unspecified'),
                createData(3, '0x14FCF', 2000, -30.2, 'unspecified'),
                createData(4, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(5, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(1, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(2, '0x14FCF', 10000, 30.2, 'unspecified'),
                createData(3, '0x14FCF', 2000, -30.2, 'unspecified'),
                createData(4, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(5, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(1, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(2, '0x14FCF', 10000, 30.2, 'unspecified'),
                createData(3, '0x14FCF', 2000, -30.2, 'unspecified'),
                createData(4, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(5, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(1, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(2, '0x14FCF', 10000, 30.2, 'unspecified'),
                createData(3, '0x14FCF', 2000, -30.2, 'unspecified'),
                createData(4, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(5, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(1, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(2, '0x14FCF', 10000, 30.2, 'unspecified'),
                createData(3, '0x14FCF', 2000, -30.2, 'unspecified'),
                createData(4, '0x14FCF', 2000, 30.2, 'unspecified'),
                createData(5, '0x14FCF', 2000, 30.2, 'unspecified'),
              ],
            balance:0,
            receiver:'',
            sender:'',
            category:'Unspecified',
            page:0,
            rowsPerPage:5,
        }
    }
    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

        
    handleChangePage = (event, page) => {
        this.setState({page})
    }

    handleChangeRowsPerPage = (event) => {
        this.setState({rowsPerPage:parseInt(event.target.value,10)})
    }
    render(){
        const {classes} = this.props
        const {rows,rowsPerPage,page} = this.state
        var emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

        return (   
            <div >
                <div style={{textAlign:'center',fontFamily:'roboto'}}>
                    <h1>
                        All deals
                    </h1>
                </div>
                <Paper className={classes.root}>
                    <div className={classes.tableWrapper}>
                        <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Contract Address</TableCell>
                                <TableCell align="right">Total Balance&nbsp;(₹)</TableCell>
                                <TableCell align="right">PGY</TableCell>
                                <TableCell align="right">Category</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                            <TableRow key={row.name}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell align="right">{row.contractaddr}</TableCell>
                                    <TableCell align="right">{row.balrupee}</TableCell>
                                    <TableCell align="right">{row.pgy}</TableCell>
                                    <TableCell align="right">{row.category}</TableCell>
                                </TableRow>
                            ))}

                            {emptyRows > 0 && (
                            <TableRow style={{ height: 48 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                colSpan={3}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                inputProps: { 'aria-label': 'Rows per page' },
                                native: true,
                                }}
                                onChangePage={this.handleChangePage}
                                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                            </TableRow>
                        </TableFooter>
                        </Table>
                    </div>
                </Paper>
                <Paper className={classes.root}>
                    <h1>
                        Add Deal
                    </h1>
                    <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        required
                        id="standard-with-placeholder"
                        label="Receiver"
                        value={this.state.receiver}
                        onChange={this.handleChange('receiver')}
                        placeholder="0x148"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        required
                        id="standard-with-placeholder"
                        label="Sender"
                        value={this.state.sender}
                        onChange={this.handleChange('sender')}
                        placeholder="0x148"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="standard-number"
                        label="Number"
                        required
                        value={this.state.balance}
                        onChange={this.handleChange('balance')}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                    <TextField
                        id="standard-select-category"
                        select
                        required
                        label="Category"
                        className={classes.textField}
                        value={this.state.category}
                        onChange={this.handleChange('category')}
                        SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                        }}
                        margin="normal"
                    >
                        {categories.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                    </form>
                    <Button variant="contained" 
                        className={classes.button}
                        onClick={() => { console.log('onClick'); }}
                        color = "primary"
                    >
                        Add new Contract
                    </Button>
                </Paper>
            </div>  
        );
    }
}

export default withStyles(styles)(Transactions);
