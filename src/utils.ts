import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "debug",
  transports: [
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.colorize(),
        format.simple()
      ),
    }),
    new transports.File({
      filename: "discord-embeds-reader-bot.log",
      format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.simple()
      ),
    }),
  ],
});

/**
 * @see https://stackoverflow.com/a/39914235/13805358
 */
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { logger, sleep };
