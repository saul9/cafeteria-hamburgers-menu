import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { styles } from './styles';
import { Container, Text, ButtonPagination, Icon } from './styled-components';

class Pagination extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  getOptionsOfSelectPages = (totalPages) => {
    var pagesOptions = [];
    for (let page = 1; page <= totalPages; page++) {
      pagesOptions.push(<option key={page} value={page}>{page}</option>);
    }
    return pagesOptions;
  }

  render() {
    const { previous, next, setPage, currentPage,
      quantity, total, classes, hideNumberOfElements,
      classContainer,
    } = this.props;
    const limit = (currentPage * quantity);
    const to = limit <= total ? limit.toString() : total.toString();
    const from = currentPage !== 1 ? ((limit - quantity) + 1).toString() : total === 0 ? '0' : '1';
    const totalElements = total.toString();
    const totalPages = Math.ceil(total / quantity);
    return (
      <Container hideNumberOfElements={hideNumberOfElements} className={classContainer}>
        <Text>Página</Text>
        <Select
          native
          value={currentPage}
          className={classes.select}
          IconComponent={ArrowDown}
          classes={{
            select: classes.selectMenu,
          }}
          onChange={(event) => setPage({ total, quantity, currentPage: parseInt(event.target.value) })}
        >
          {this.getOptionsOfSelectPages(totalPages)}
        </Select>
        <Text>{`de ${totalPages}`}</Text>
        <Text style={{ display: hideNumberOfElements ? 'none' : 'grid' }}>{`${from} - ${to} de ${totalElements}`}</Text>
        <div
          className={currentPage <= 1  ? classes.buttonDisable : classes.button}
          onClick={currentPage <= 1  ? () => { } : () => previous({ total, quantity, currentPage: currentPage - 1 })}
          style={{ display: hideNumberOfElements ? 'none' : 'grid' }}
        >
          <ButtonPagination
            isbac={'flex-start'}
            disabled={currentPage <= 1 }
          >
            <Icon disabled={currentPage <= 1 } className={"material-icons"}>chevron_left</Icon>
          </ButtonPagination>
        </div>
        <div
          className={currentPage * quantity >= total  ? classes.buttonDisable : classes.button}
          onClick={currentPage * quantity >= total  ? () => { } : () => next({ total, quantity, currentPage: currentPage + 1 })}
          style={{ display: hideNumberOfElements ? 'none' : 'grid' }}
        >
          <ButtonPagination
            isbac={'flex-end'}
            disabled={currentPage * quantity >= total }
          >
            <Icon disabled={currentPage * quantity >= total } className="material-icons">chevron_right</Icon>
          </ButtonPagination>
        </div>
      </Container>
    );
  }
}

Pagination.propTypes = {
  classes: PropTypes.object,
  previous: PropTypes.func,
  next: PropTypes.func,
  setPage: PropTypes.func,
  currentPage: PropTypes.number,
  quantity: PropTypes.number,
  total: PropTypes.number,
};

export default withStyles(styles)(Pagination);
