import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="https://i.pinimg.com/originals/0f/55/c6/0f55c66b6066b17d93f504ae7abb47ae.jpg" alt="Hoaaa" />
            <h4 className={cx('info')}>
                <p className={cx('name')}>
                    <span>
                        Nguyen Van A
                    </span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyevana</span>
            </h4>
        </div>
    );
}

export default AccountItem;
