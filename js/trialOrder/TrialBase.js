

class TrialBase {

    constructor(trialBlock) {
        if (trialBlock == null) return; //for testing

        this.blockPosition = trialBlock.blockPosition;
        this.trials = trialBlock.original_trials;
        this.runTrial = trialBlock.runTrial;
        this.bind_id = trialBlock.bind_id;
        this.names = trialBlock.trialNames;
        this.xml = trialBlock.xml;
        this.otherParams = trialBlock.otherParams;
    }
}
