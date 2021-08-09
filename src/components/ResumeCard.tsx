import {
  Box,
  Card,
  CardContent,
  CardMedia,
  createStyles,
  IconButton,
  makeStyles,
  Modal,
  Typography,
  useTheme,
  Backdrop,
  Paper,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
  Divider,
} from "@material-ui/core";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import RoomIcon from "@material-ui/icons/Room";
import LinkIcon from "@material-ui/icons/Link";
import DateRangeIcon from "@material-ui/icons/DateRange";
import GroupIcon from "@material-ui/icons/Group";

import { forwardRef, useState } from "react";
import { useSpring, animated } from "react-spring"; // web.cjs is required for IE 11 support
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    cardBase: {
      maxWidth: "450px",
      overflow: "auto",

      cursor: "pointer",

      "&:hover": {
        backgroundColor: theme.palette.grey[100],
      },
    },
    media: {
      maxHeight: "100px",
      width: "100%",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    linkWithIcon: {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    externalLink: {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    modalPaperBase: { maxHeight: "90vh", overflow: "auto" },
  })
);

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

interface ResumeCardProps {
  title: string;
  img?: any;
  subtitle?: string;
  pageLinkPath?: string;
  startDate?: string;
  endDate?: string;
  organization?: string;
  location?: string;
  externalLink?: string;
  descriptionTitle?: string;
  description?: any;
}

const ResumeCard: React.FC<ResumeCardProps> = ({
  title,
  img,
  subtitle,
  pageLinkPath,
  startDate,
  endDate,
  organization,
  location,
  externalLink,
  descriptionTitle,
  description,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const modalMetaDataInfo = [
    {
      prop: startDate,
      icon: <DateRangeIcon />,
      text: `${startDate}${endDate ? ` - ${endDate}` : ""}`,
    },
    {
      prop: organization,
      icon: <GroupIcon />,
      text: organization,
    },
    {
      prop: location,
      icon: <RoomIcon />,
      text: location,
    },
    {
      prop: externalLink,
      icon: <LinkIcon />,
      text: (
        <a href={externalLink} className={classes.externalLink} target='_blank'>
          {externalLink}
        </a>
      ),
    },
  ];

  return (
    <>
      <Card className={classes.cardBase} onClick={() => setOpen(true)}>
        {img && (
          <CardMedia component='img' src={img} className={classes.media} />
        )}

        <CardContent style={{ padding: "4px 8px 8px 12px" }}>
          <Typography variant='h5'>{title}</Typography>
          {subtitle && <Typography variant='body1'>{subtitle}</Typography>}
        </CardContent>
      </Card>
      <Modal
        aria-labelledby='spring-modal-title'
        aria-describedby='spring-modal-description'
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box width='700px'>
            <Paper className={classes.modalPaperBase}>
              <CardMedia component='img' src={img} height='150px' />
              <Box py={2} px={6}>
                <Typography
                  variant='h4'
                  gutterBottom
                  style={{ color: theme.palette.primary.contrastText }}
                >
                  {title}
                </Typography>
                <List>
                  {modalMetaDataInfo.map(
                    (elem) =>
                      elem.prop && (
                        <ListItem style={{ padding: "0px" }}>
                          <ListItemIcon
                            style={{ color: theme.palette.grey[400] }}
                          >
                            {elem.icon}
                          </ListItemIcon>
                          <ListItemText primary={elem.text} />
                        </ListItem>
                      )
                  )}
                </List>
                <Divider />
                <Box py={2}>
                  {description && (
                    <>
                      <Typography variant='h5' gutterBottom>
                        {descriptionTitle || "Description"}
                      </Typography>
                      <Typography>{description}</Typography>
                    </>
                  )}
                </Box>
              </Box>
              {pageLinkPath && (
                <Box
                  p={2}
                  display='flex'
                  justifyContent='flex-end'
                  width='100%'
                >
                  <Link to={pageLinkPath}>
                    <Box
                      display='flex'
                      alignItems='center'
                      className={classes.linkWithIcon}
                    >
                      <Typography variant='body1' style={{ fontSize: "14pt" }}>
                        See More
                      </Typography>
                      <ArrowForwardIosIcon />
                    </Box>
                  </Link>
                </Box>
              )}
            </Paper>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ResumeCard;
