import cluster from 'cluster';
import domain from 'domain';


export default (app) => {

  let appDomain = domain.create();

  if(cluster.isMaster) {
    cluster.fork();
    cluster.fork();
  } else {
    appDomain.run(() => {
      app.listen(3000, () => {
        console.log('App listen on localhost:3000');
      });
    });
  }

  appDomain.on('error', (err) => {
    console.log(err.message);
  });

  cluster.on('disconnect', () => {
    cluster.fork();
  });
};
